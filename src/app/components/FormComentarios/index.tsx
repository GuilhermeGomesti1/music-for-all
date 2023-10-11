"use client";
import React, { useState, useEffect } from "react";
import { db, auth } from "@/app/firebase";
import { User } from "firebase/auth";
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

function CommentComponent({ videoId }: { videoId?: string }) {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<DocumentData[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [replyText, setReplyText] = useState(""); // Novo estado para texto da resposta
  const [replyingTo, setReplyingTo] = useState(""); // ID do comentário sendo respondido

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
  

  return (
    <div>
      {/* Formulário de Comentário */}
      {user ? (
        <div className={styles.formContainer}>
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
        <p>Faça login para comentar.</p>
      )}

      {/* Lista de Comentários */}
      <ul className={styles.commentList}>
        {comments.map((comment, index) => (
          <li key={comment.id} className={styles.commentItem}>
            <span className={styles.commentAuthor}>{comment.authorEmail}:</span>{" "}
            {comment.text} -{" "}
            <span className={styles.commentTimestamp}>
              {comment.timestamp.toDate().toLocaleString()}
            </span>
            {/* Botão para selecionar o comentário para resposta */}
            <button
              className={styles.buttonresponder}
              onClick={() => selectReplyingTo(comment.id)}
            >
              Responder
            </button>

            {user && user.email === comment.authorEmail && (
            <button
              className={styles.deleteButton}
              onClick={() => deleteComment(comment.id)}
            >
              Apagar Comentário
            </button>
          )}
            {/* Formulário de resposta para este comentário se estiver selecionado */}
            {replyingTo === comment.id && (
              <div className={styles.replyForm}>
                <textarea
                  className={styles.textareaInput}
                  placeholder="Digite sua resposta..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button
                
                  className={`${styles.rsubmitButton} ${
                    replyText.trim() === ""
                      ? styles.rbuttonBefore
                      : styles.rbuttonAfter
                  }`}
                  onClick={() => addReply(comment.id)}
                >
                  Enviar Resposta
                </button>

                <button className={styles.cancelButton} onClick={cancelReply}   >
                  Cancelar Resposta
                </button>
              </div>
            )}
            {/* Lista de respostas para este comentário */}
            <ul className={styles.replyList}>
              {comment.replies &&
                comment.replies.map(
                  (reply: DocumentData, replyIndex: number) => (
                    <li key={replyIndex} className={styles.replyItem}>
                      <span className={styles.replyAuthor}>
                        {reply.authorEmail}:
                      </span>{" "}
                      {reply.text} -{" "}
                      <span className={styles.replyTimestamp}>
                        {reply.timestamp.toDate().toLocaleString()}
                      </span>
                    </li>
                  )
                )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentComponent;