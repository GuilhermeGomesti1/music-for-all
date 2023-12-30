"use client";
import React, { useState, useEffect } from "react";
import { db, auth } from "@/app/firebase";
import { User } from "firebase/auth";
import { DeleteIcon } from "../Icons/OtherIcons/deleteIcon";
import styles from "./styles.module.css";
import {
  Firestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  DocumentData,
  QueryDocumentSnapshot,
  QuerySnapshot,
  Timestamp,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Link from "next/link";
import { DownArrow } from "../Icons/OtherIcons/downArrow";
import { UpArrow } from "../Icons/OtherIcons/upArrow";
import { LikeIcon } from "../Icons/OtherIcons/like";

function CommentComponent({ videoId }: { videoId?: string }) {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<DocumentData[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [replyText, setReplyText] = useState(""); // Novo estado para texto da resposta
  const [replyingTo, setReplyingTo] = useState(""); // ID do comentário sendo respondido
  const [showReplies, setShowReplies] = useState<{
    [commentId: string]: boolean;
  }>({});
  const [commentsToShow, setCommentsToShow] = useState(3);
  const [areCommentsOpen, setAreCommentsOpen] = useState(false);
  const hasUserLiked = (item: DocumentData) => {
    return item.likes.includes(user?.email);
  };
  const [likedComments, setLikedComments] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // O código abaixo será executado apenas no navegador
      import("scrollreveal").then((ScrollRevealModule) => {
        const ScrollReveal = ScrollRevealModule.default || ScrollRevealModule;

        const sr = ScrollReveal({
          duration: 1000,
          reset: false,
          // Outras opções de configuração aqui
        });

        sr.reveal(".animated-item", {
          origin: "bottom",
          distance: "20px",
          easing: "ease-in-out",
        });
      });
    }
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // O usuário está logado
        setUser(authUser);
      } else {
        // O usuário não está logado
        setUser(null);
      }
    });

    return () => {
      // Limpe o observador quando o componente é desmontado
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    // Carregue todos os comentários da coleção "comentarios" do Firestore
    const firestore = db as Firestore;
    const commentsCollection = collection(firestore, "comentarios");
    const commentsQuery = query(
      commentsCollection,
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(
      commentsQuery,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const videoComments = snapshot.docs
          .map((doc: QueryDocumentSnapshot<DocumentData>) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((comment) => (comment as any).videoId === videoId);
        setComments(videoComments);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [videoId]);

  const addComment = async () => {
    if (commentText.trim() !== "") {
      const firestore = db as Firestore;
      const commentsCollection = collection(firestore, "comentarios");
      const userEmail = user?.email || "Usuário Anônimo";
      const timestamp = Timestamp.fromDate(new Date());

      // Adicione o ID do vídeo ao novo comentário
      await addDoc(commentsCollection, {
        text: commentText,
        authorEmail: userEmail,
        timestamp: timestamp,
        videoId: videoId, // Adicione o ID do vídeo
        likes: [],
        replies: [],
      });

      setCommentText("");
    }
  };

  const addReply = async (commentId: string) => {
    if (replyText.trim() !== "") {
      // Encontre o comentário pelo ID
      const comment = comments.find((c) => c.id === commentId);

      if (comment) {
        const firestore = db as Firestore;
        const commentsCollection = collection(firestore, "comentarios");

        const userEmail = user?.email || "Usuário Anônimo";

        // Crie um objeto de resposta
        const reply = {
          text: replyText,
          authorEmail: userEmail,
          timestamp: Timestamp.fromDate(new Date()),
          likes: [],
        };

        // Certifique-se de que a propriedade "replies" existe
        comment.replies = comment.replies || [];

        // Atualize a matriz de respostas do comentário
        comment.replies.push(reply);

        // Atualize o Firestore com a nova resposta
        const commentDocRef = doc(firestore, "comentarios", comment.id);
        await updateDoc(commentDocRef, {
          replies: comment.replies,
        });

        // Limpe o campo de texto da resposta
        setReplyText("");
        setReplyingTo("");
      }
    }
  };

  // Função para selecionar o comentário a ser respondido
  const selectReplyingTo = (commentId: string) => {
    setReplyingTo(commentId);
  };

  const cancelReply = () => {
    setReplyingTo(""); // Limpa o estado de "replyingTo" para fechar a janela de resposta
    setReplyText(""); // Limpa o texto da resposta
  };

  const deleteComment = async (commentId: string) => {
    try {
      // Verifique se o usuário está autenticado
      if (user) {
        // Verifique se o usuário é o autor do comentário
        const comment = comments.find((c) => c.id === commentId);
        if (comment && comment.authorEmail === user.email) {
          const firestore = db as Firestore;
          const commentDocRef = doc(firestore, "comentarios", commentId);

          // Exclua o comentário do Firestore
          await deleteDoc(commentDocRef);
        } else {
          // O usuário não tem permissão para excluir o comentário
          console.log("Você não tem permissão para excluir este comentário.");
        }
      } else {
        // O usuário não está autenticado
        console.log("Faça login para excluir um comentário.");
      }
    } catch (error) {
      console.error("Erro ao excluir o comentário:", error);
    }
  };

  const deleteReply = async (commentId: string, replyIndex: number) => {
    try {
      if (user) {
        const comment = comments.find((c) => c.id === commentId);

        if (comment && comment.replies && comment.replies.length > replyIndex) {
          const firestore = db as Firestore;
          const commentDocRef = doc(firestore, "comentarios", commentId);

          // Remova a resposta da matriz de respostas
          comment.replies.splice(replyIndex, 1);

          // Atualize o Firestore com as respostas atualizadas
          await updateDoc(commentDocRef, {
            replies: comment.replies,
          });
        } else {
          console.log(
            "A resposta não existe ou você não tem permissão para excluí-la."
          );
        }
      } else {
        console.log("Faça login para excluir uma resposta.");
      }
    } catch (error) {
      console.error("Erro ao excluir a resposta:", error);
    }
  };

  const handleShowMoreComments = () => {
    setCommentsToShow((prevCount) => prevCount + 1);
  };

  const handleShowLessComments = () => {
    setCommentsToShow(3);
  };

  const likeComment = async (commentId: string) => {
    const comment = comments.find((c) => c.id === commentId);

    if (comment) {
      const firestore = db as Firestore;
      const commentDocRef = doc(firestore, "comentarios", comment.id);

      const userLiked = comment.likes.includes(user?.email);

      if (userLiked) {
        const updatedLikes = comment.likes.filter(
          (email: string) => email !== user?.email
        );
        await updateDoc(commentDocRef, {
          likes: updatedLikes,
        });

        // Remove o comentário do estado likedComments
        setLikedComments(likedComments.filter((id) => id !== commentId));
      } else {
        comment.likes.push(user?.email);
        await updateDoc(commentDocRef, {
          likes: comment.likes,
        });

        // Adicione o comentário ao estado likedComments
        setLikedComments([...likedComments, commentId]);
      }
    }
  };
  const likeReply = async (commentId: string, replyIndex: number) => {
    const comment = comments.find((c) => c.id === commentId);

    if (comment && comment.replies && comment.replies.length > replyIndex) {
      const reply = comment.replies[replyIndex];
      const firestore = db as Firestore;
      const commentDocRef = doc(firestore, "comentarios", comment.id);

      const userLiked = reply.likes.includes(user?.email);

      if (userLiked) {
        const updatedLikes = reply.likes.filter(
          (email: string) => email !== user?.email
        );
        reply.likes = updatedLikes;

        // Remove a resposta do estado likedComments
        setLikedComments(likedComments.filter((id) => id !== reply.id));
      } else {
        reply.likes.push(user?.email);

        // Adicione a resposta ao estado likedComments
        setLikedComments([...likedComments, reply.id]);
      }

      await updateDoc(commentDocRef, {
        replies: comment.replies,
      });
    }
  };

  return (
    <div>
      <div className={styles.containerComentarios}>
        {/* Formulário de Comentário */}
        {user ? (
          <div
            data-test="form-usuario-logado"
            className={`${styles.formContainer} animated-item`}
          >
            <textarea
              className={styles.textareaInput}
              placeholder="Digite seu comentário..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button
              className={`${styles.submitButton} ${
                commentText.trim() === ""
                  ? styles.buttonBefore
                  : styles.buttonAfter
              }`}
              onClick={addComment}
              disabled={commentText.trim() === ""}
            >
              Enviar Comentário
            </button>
          </div>
        ) : (
          <div className={`${styles.formContainer} animated-item`}>
            <Link className={styles.pointerCursor} href="/dashboard">
              <textarea
                className={`${styles.textareaInput} ${styles.pointerCursor}`}
                placeholder="Faça login para comentar..."
                disabled
              />
              <button className={styles.submitButton} disabled>
                Enviar Comentário
              </button>{" "}
            </Link>
          </div>
        )}

        {/* Lista de Comentários */}
        <ul className={`${styles.commentList} animated-item`}>
          {comments.slice(0, commentsToShow).map((comment, index) => (
            <li key={comment.id} className={styles.commentItem}>
              <span className={styles.commentAuthor}>
                {comment.authorEmail}:
              </span>
              <br />
              {comment.text} -{" "}
              <span className={styles.commentTimestamp}>
                {comment.timestamp.toDate().toLocaleString()}
              </span>
              {/* Botão para selecionar o comentário para resposta */}
              {user ? (
                <button
                  data-test="res-button-commment"
                  className={styles.buttonresponder}
                  onClick={() => selectReplyingTo(comment.id)}
                >
                  Responder
                </button>
              ) : (
                <Link href="/dashboard" className={styles.loginbuttonresponder}>
                  Faça login para responder
                </Link>
              )}
              {user && user.email === comment.authorEmail && (
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteComment(comment.id)}
                >
                  Apagar <DeleteIcon />
                </button>
              )}
              <span className={styles.commentLikes}>
                {comment.likes.length}{" "}
                {comment.likes.length === 1 ? "Like" : "Likes"}
              </span>
              {user && (
                <button
                  className={`${styles.likeButton} ${
                    likedComments.includes(comment.id) ? styles.liked : ""
                  }`}
                  onClick={() => likeComment(comment.id)}
                >
                  <LikeIcon />
                </button>
              )}
              {index === commentsToShow - 1 &&
                commentsToShow < comments.length && (
                  <button
                    className={styles.downButton}
                    onClick={handleShowMoreComments}
                  >
                    <DownArrow />{" "}
                    <span className={styles.vermaistext}>Ver Mais</span>
                  </button>
                )}
              {/* Formulário de resposta para este comentário se estiver selecionado */}
              {replyingTo === comment.id && (
                <div className={styles.replyForm}>
                  <textarea
                    data-test="textAreaResposta"
                    className={styles.textareaInput}
                    placeholder="Digite sua resposta..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                  <button
                    data-test="button-enviar-resposta"
                    className={`${styles.rsubmitButton} ${
                      replyText.trim() === ""
                        ? styles.rbuttonBefore
                        : styles.rbuttonAfter
                    }`}
                    onClick={() => addReply(comment.id)}
                  >
                    Enviar Resposta
                  </button>

                  <button className={styles.cancelButton} onClick={cancelReply}>
                    Cancelar
                  </button>
                </div>
              )}
              {/* Lista de respostas para este comentário */}
              <ul className={styles.replyList}>
                {comment.replies &&
                  comment.replies.map(
                    (reply: DocumentData, replyIndex: number) => (
                      <li key={replyIndex} className={styles.replyItem}>
                        <div className={styles.divrespostas}>
                          {" "}
                          <span
                            data-test="res-confirm"
                            className={styles.titlerespostas}
                          >
                            Resposta de{" "}
                          </span>
                          <span className={styles.replyAuthor}>
                            {reply.authorEmail}:
                          </span>{" "}
                          {reply.text} -{" "}
                          <span className={styles.replyTimestamp}>
                            {reply.timestamp.toDate().toLocaleString()}
                          </span>{" "}
                          {user && user.email === reply.authorEmail && (
                            <button
                              className={styles.deleteButtonreply}
                              onClick={() =>
                                deleteReply(comment.id, replyIndex)
                              }
                            >
                              Apagar
                              <DeleteIcon />
                            </button>
                          )}{" "}
                          <span className={styles.replyLikes}>
                            {reply.likes.length}{" "}
                            {reply.likes.length === 1 ? "Like" : "Likes"}
                          </span>
                          {user && (
                            <button
                              className={`${styles.likeButtonreply} ${
                                likedComments.includes(reply.id)
                                  ? styles.liked
                                  : ""
                              }`}
                              onClick={() => likeReply(comment.id, replyIndex)}
                            >
                              <LikeIcon />
                            </button>
                          )}
                        </div>
                      </li>
                    )
                  )}
              </ul>
            </li>
          ))}{" "}
          {commentsToShow > 3 && (
            <button
              className={styles.upButton}
              onClick={handleShowLessComments}
            >
              <UpArrow />{" "}
              <span className={styles.vermenostext}>Fechar comentários </span>
            </button>
          )}
        </ul>
      </div>
    </div>
  );
}

export default CommentComponent;
