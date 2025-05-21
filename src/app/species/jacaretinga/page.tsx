// src/app/species/jacaretinga/page.tsx
import Image from 'next/image';

export const metadata = {
  title: 'Jacaretinga | Medicina Tradicional do Abacatal',
  description: 'Detalhes sobre Caiman crocodilus (Jacaretinga) e seus usos na medicina tradicional.',
};

export default function JacaretingaPage() {
  return (
    <section id="jacaretinga" className="container mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 border-b-2 border-green-600 pb-4 mb-6 text-center">
        Caiman crocodilus (Jacaretinga)
      </h2>

      <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-6">
        <div className="w-full md:w-1/2">
          <Image src="/images/jacaretinga.jpg" alt="Jacaretinga (BioDiversity4All)" width={600} height={400} layout="responsive" className="rounded-lg shadow-md mb-4 md:mb-0"/>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">Nome Popular: Jacaretinga</h3>
          <h4 className="text-lg font-medium text-gray-700 mb-2">Contexto de Uso no Abacatal:</h4>
          <p className="text-gray-800 leading-relaxed">
            A jacaretinga, um jacaré de pequeno porte comum na região, também é uma espécie citada no contexto da medicina tradicional do Abacatal e de comunidades ribeirinhas. Seu uso, assim como o da sucuri, envolve o aproveitamento de certas partes do animal com fins terapêuticos específicos.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-medium text-gray-700 mb-3 border-b border-gray-300 pb-2">
          Prováveis Princípios Ativos e Efeitos Medicinais (a serem investigados):
        </h4>
        <p className="text-gray-800 leading-relaxed mb-4">
          O potencial medicinal de produtos derivados da jacaretinga, embora menos estudado que o de vegetais, pode estar relacionado a:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2 pl-4">
          <li>
            <strong className="text-blue-700">Gordura de Jacaretinga:</strong> Tradicionalmente empregada topicamente para tratamento de problemas de pele, como eczemas, irritações e infecções leves, além de ser usada em massagens para aliviar dores articulares e musculares. Pode conter ácidos graxos com propriedades anti-inflamatórias, emolientes e até antimicrobianas.
          </li>
          <li>
            <strong className="text-blue-700">Colágeno e outros Componentes Teciduais:</strong> Presentes em abundância em tecidos animais, podem estar associados a propriedades regenerativas e cicatrizantes, especialmente em aplicações para feridas ou recuperação de tecidos.
          </li>
        </ul>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded-md" role="alert">
        <h4 className="font-bold text-lg mb-2">Considerações Importantes:</h4>
        <p className="leading-relaxed">
          O uso de fauna na medicina tradicional levanta questões importantes sobre sustentabilidade e conservação das espécies. É fundamental que as práticas tradicionais sejam avaliadas quanto ao seu impacto ambiental e que a busca por evidências científicas não desrespeite os saberes e o manejo tradicional da comunidade.
        </p>
      </div>

      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-gray-600 italic">
          A jacaretinga simboliza a conexão profunda entre a fauna amazônica e a saúde quilombola.
        </p>
      </div>
    </section>
  );
}