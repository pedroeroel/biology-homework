// src/app/species/sucuri/page.tsx
import Image from 'next/image';

export const metadata = {
  title: 'Sucuri | Medicina Tradicional do Abacatal',
  description: 'Detalhes sobre Eunectes murinus (Sucuri) e seus usos na medicina tradicional.',
};

export default function SucuriPage() {
  return (
    <section id="sucuri" className="container mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 border-b-2 border-green-600 pb-4 mb-6 text-center">
        Eunectes murinus (Sucuri)
      </h2>

      <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-6">
        <div className="w-full md:w-1/2">
          <Image src="/images/sucuri.jpg" alt="Sucuri (InfoEscola)" width={600} height={400} layout="responsive" className="rounded-lg shadow-md mb-4 md:mb-0"/>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">Nome Popular: Sucuri</h3>
          <h4 className="text-lg font-medium text-gray-700 mb-2">Contexto de Uso no Abacatal:</h4>
          <p className="text-gray-800 leading-relaxed">
            Na medicina tradicional do Quilombo do Abacatal e de outras comunidades amazônicas, certas partes da sucuri são valorizadas por seus propósitos medicinais. O uso desses insumos é transmitido oralmente entre gerações, fazendo parte de um sistema de cura ancestral.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-medium text-gray-700 mb-3 border-b border-gray-300 pb-2">
          Prováveis Princípios Ativos e Efeitos Medicinais (a serem investigados):
        </h4>
        <p className="text-gray-800 leading-relaxed mb-4">
          A investigação de princípios ativos em produtos de origem animal na medicina tradicional é um campo complexo e em desenvolvimento. No caso da sucuri, o foco tradicionalmente está em:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 pl-4">
          <li>
            <strong className="text-blue-700">Óleo ou Gordura de Sucuri:</strong> Tradicionalmente utilizado para aliviar dores reumáticas, inflamações, dores musculares e problemas respiratórios como tosse e asma. As ações anti-inflamatórias e analgésicas poderiam ser atribuídas à presença de ácidos graxos insaturados, esteroides ou outros compostos lipídicos. A comprovação científica desses efeitos e a identificação precisa dos componentes ativos demandam pesquisa aprofundada.
          </li>
          <li>
            <strong className="text-blue-700">Proteínas e Peptídeos:</strong> Possibilidade de presença de compostos bioativos com propriedades variadas, como enzimas ou peptídeos com ação anti-inflamatória ou cicatrizante.
          </li>
        </ul>
      </div>

      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded-md" role="alert">
        <h4 className="font-bold text-lg mb-2">Importante: Perspectiva Científica e Cultural</h4>
        <p className="leading-relaxed">
          O estudo do uso de produtos animais na medicina tradicional é um campo transdisciplinar que exige respeito às práticas culturais e, ao mesmo tempo, rigor científico para identificar os mecanismos de ação e a segurança desses insumos. É crucial documentar esses saberes para valorizá-los e, quando possível, corroborá-los com evidências.
        </p>
      </div>

      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-gray-600 italic">
          Os conhecimentos sobre o uso da sucuri são parte intrínseca da sabedoria medicinal quilombola.
        </p>
      </div>
    </section>
  );
}