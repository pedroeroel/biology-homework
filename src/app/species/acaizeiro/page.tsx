import Image from 'next/image';

export const metadata = {
  title: 'Açaí | Medicina Tradicional do Abacatal',
  description: 'Detalhes sobre Euterpe oleracea (Açaizeiro) e seus princípios ativos na medicina tradicional.',
};

export default function AcaiPage() {
  return (
    <section id="acai" className="container mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 border-b-2 border-green-600 pb-4 mb-6 text-center">
        Euterpe oleracea (Açaizeiro)
      </h2>

      <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-6">
        <div className="w-full md:w-1/2">
          <Image src="/images/acaizeiro.jpg" alt="Açaizeiro (Las Tribus Biojoias em Sementes Amazônicas)" width={600} height={400} layout="responsive" className="rounded-lg shadow-md mb-4 md:mb-0"/>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">Nome Popular: Açaí</h3>
          <h4 className="text-lg font-medium text-gray-700 mb-2">Contexto de Uso no Abacatal:</h4>
          <p className="text-gray-800 leading-relaxed">
            O açaí é um alimento fundamental na dieta da comunidade, sendo consumido de diversas formas. Além do valor nutricional, é reconhecido na medicina tradicional do Quilombo do Abacatal por suas propriedades que contribuem para a vitalidade e bem-estar geral.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-medium text-gray-700 mb-3 border-b border-gray-300 pb-2">
          Prováveis Princípios Ativos e Efeitos Fitoterápicos:
        </h4>
        <p className="text-gray-800 leading-relaxed mb-4">
          A riqueza nutricional do açaí está ligada a diversos compostos bioativos com potenciais benefícios à saúde:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 pl-4">
          <li>
            <strong className="text-blue-700">Antocianinas:</strong> Pigmentos responsáveis pela cor roxa intensa. São potentes antioxidantes, com propriedades anti-inflamatórias e potencial cardioprotetor.
          </li>
          <li>
            <strong className="text-blue-700">Flavonoides:</strong> Outros compostos com ação antioxidante e anti-inflamatória, que podem contribuir para a proteção celular.
          </li>
          <li>
            <strong className="text-blue-700">Vitaminas e Minerais:</strong> Rico em vitamina C, vitamina E, ferro, cálcio, magnésio e potássio, que são essenciais para o funcionamento adequado do organismo e fortalecimento da imunidade.
          </li>
          <li>
            <strong className="text-blue-700">Fibras:</strong> Auxiliam na saúde digestiva, regulando o trânsito intestinal e contribuindo para a saciedade.
          </li>
          <li>
            <strong className="text-blue-700">Ácidos Graxos Essenciais:</strong> Contém ômega-3, 6 e 9, importantes para a saúde cardiovascular e cerebral.
          </li>
        </ul>
      </div>

      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-gray-600 italic">
          O açaí é um exemplo de alimento que integra a dieta e a medicina tradicional, reforçando a importância do conhecimento local.
        </p>
      </div>
    </section>
  );
}