import Image from 'next/image';

export const metadata = {
  title: 'Poraquê | Medicina Tradicional do Abacatal',
  description: 'Explorando o Electrophorus electricus (Poraquê) e seus usos na medicina tradicional do Quilombo do Abacatal.',
};

export default function PoraquePage() {
  return (
    <section id="poraque" className="container mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 border-b-2 border-green-600 pb-4 mb-6 text-center">
        Electrophorus electricus (Poraquê)
      </h2>

      <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-6">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/poraqué.jpg"
            alt="Poraquê, o peixe-elétrico amazônico"
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg shadow-md mb-4 md:mb-0"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">Nome Popular: Poraquê, Peixe-elétrico, Enguia Elétrica</h3>
          <h4 className="text-lg font-medium text-gray-700 mb-2">Contexto de Uso na Comunidade Quilombola do Abacatal:</h4>
          <p className="text-gray-800 leading-relaxed">
            O poraquê, notável por sua capacidade de gerar fortes descargas elétricas, ocupa um lugar singular na medicina tradicional do Quilombo do Abacatal. Seu uso, embora mais específico e menos difundido que o de outros recursos naturais, está enraizado em uma profunda compreensão dos atributos singulares da espécie, frequentemente associados a conceitos de "energia" ou "poder" terapêutico para abordar certas condições de saúde.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-medium text-gray-700 mb-3 border-b border-gray-300 pb-2">
          Potenciais Atributos e Efeitos Medicinais na Tradição (Investigação Necessária):
        </h4>
        <p className="text-gray-800 leading-relaxed mb-4">
          A aplicação do poraquê na medicina tradicional diverge da abordagem farmacológica convencional, sendo mais conectada às percepções culturais sobre suas propriedades. No entanto, a investigação científica pode explorar possíveis correlações com:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 pl-4">
          <li>
            <strong className="text-blue-700">Compostos Bioativos Específicos:</strong> Embora especulativo, a pesquisa poderia investigar a presença de peptídeos ou outras moléculas com potenciais propriedades analgésicas ou neuromoduladoras que poderiam justificar certas aplicações tradicionais. Isso requer estudos bioquímicos avançados.
          </li>
          <li>
            <strong className="text-blue-700">Estimulação Eletrofisiológica Controlada:</strong> Em algumas práticas tradicionais, o choque elétrico do poraquê é aplicado de forma controlada para aliviar dores localizadas, reativar funções motoras ou tratar certas condições consideradas "paralisias" ou "entorpecimentos". A base para tal uso pode envolver um efeito placebo significativo ou, em casos muito específicos e sob condições controladas, uma modulação fisiológica mediada por estímulos elétricos. É crucial ressaltar que a aplicação direta e descontrolada é extremamente perigosa.
          </li>
        </ul>
      </div>

      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md" role="alert">
        <h4 className="font-bold text-lg mb-2">Advertência Fundamental:</h4>
        <p className="leading-relaxed">
          O manuseio do Electrophorus electricus exige conhecimento técnico e extremo rigor devido à sua capacidade de gerar descargas elétricas de alta voltagem que podem ser severamente prejudiciais ou fatais a seres humanos. Qualquer menção ao uso medicinal tradicional do poraquê deve ser acompanhada de uma ressalva inequívoca sobre os riscos inerentes e a impraticabilidade de sua aplicação sem supervisão especializada e em ambiente controlado. Priorize sempre a segurança e a não replicação de práticas perigosas. A documentação deste saber visa à compreensão etnográfica e científica, não à incentivação de seu uso sem as devidas precauções e conhecimento aprofundado.
        </p>
      </div>

      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-gray-600 italic">
          A compreensão do poraquê na medicina tradicional exige uma abordagem que concilie o saber ancestral com rigor científico e, acima de tudo, segurança.
        </p>
      </div>
    </section>
  );
}