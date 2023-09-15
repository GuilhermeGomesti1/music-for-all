import Image from "next/image";
import styles from "./styles.module.css";
import titlecursos2 from "../../../public/images/titlecursos2.png";
import cursoviolao1 from "../../../public/images/cursoviolao1.png";
import violao from "../../../public/images/violao.png";

export default function Cursos() {
  return (
    <>
      <head>
        <title>Descubra o Mundo Mágico do Violão</title>
      </head>
      <main>
        <div className={styles.containerViolao}>
          <Image
            className={styles.violaoContainer}
            src={violao}
            alt="Music For All Logo"
          />
        </div>

        <div className={styles.cursodeviolao}>
          
            <h1> Descubra o Mundo Mágico do Violão  </h1>
            <p>
              Bem-vindo ao universo encantador do violão, onde as notas se
              transformam em emoções e os acordes criam histórias musicais
              inesquecíveis. Seja você um iniciante curioso ou um amante da
              música ávido por aprimorar suas habilidades, nosso espaço é o
              lugar perfeito para você!
            </p>

             <h2>Por que o violão?</h2>
             
             <ul>
                <li>  Acessibilidade: O violão é um dos instrumentos
            mais acessíveis para iniciantes. Suas cordas macias e agradáveis
            tornam a aprendizagem rápida e gratificante.</li>
                <li>  Versatilidade: Com o
            violão, você pode tocar uma ampla variedade de estilos musicais,
            desde clássico e folk até pop e rock. As possibilidades são
            infinitas!</li>
                <li> Benefícios Cognitivos: Estudos mostram que tocar
            violão estimula o cérebro, melhora a concentração e alivia o
            estresse.</li>
                <li> Comunidade Musical: Junte-se a uma comunidade
            apaixonada de músicos que compartilham sua paixão pelo violão.
            Compartilhe experiências, dicas e inspirações.  </li>
             </ul>

             <h2>O que oferecemos:</h2>
             <ul>
             <li>
             
            Aulas Personalizadas: Nossos instrutores talentosos e experientes
            estão prontos para guiá-lo em sua jornada musical, adaptando as
            aulas ao seu nível e estilo de aprendizado.
             </li>
                <li> Repertório
            Abrangente: Aprenda suas músicas favoritas enquanto desenvolve suas
            habilidades. De clássicos atemporais a hits contemporâneos, temos
            tudo! </li>
                <li> Workshops Criativos: Explore técnicas avançadas,
            improvisação e composição. Liberte sua criatividade musical!</li>
                <li> 💻
            Recursos Online: Acesse vídeo aulas, partituras, guias práticos e
            muito mais em nossa plataforma online de fácil uso.</li>
             </ul>

             <p>
                Promoção
            Especial: Inscreva-se agora e ganhe um eBook exclusivo com dicas e
            truques para acelerar sua jornada no violão!</p>
             <p>Não perca a
            oportunidade de desbloquear seu potencial musical. O violão está
            esperando por você para criar sua própria sinfonia. Junte-se a nós e
            comece a sua jornada musical hoje!</p> 
            
            
              <p>Vamos tocar juntos? </p>
          
          <Image
            className={styles.fotocurso}
            src={cursoviolao1}
            alt="foto curso de violão"
          />
        </div>
      </main>
    </>
  );
}
