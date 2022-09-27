<template>
  <div id="faq" class="bg-gray-100">
    <div class="container mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="mx-auto divide-y-2 divide-gray-200">
        <h2
          class="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Perguntas Frequentes
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure
            v-for="faq in faqs"
            :key="faq.question"
            v-slot="{ open }"
            as="div"
            class="pt-6"
          >
            <dt class="text-lg">
              <DisclosureButton
                class="flex w-full items-center justify-between text-left text-gray-400"
              >
                <span class="font-medium text-gray-900">{{
                  faq.question
                }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusCircleIcon
                    :class="[
                      open ? 'hidden' : 'block',
                      'h-6 w-6 transform text-gray-900',
                    ]"
                    aria-hidden="true"
                  />
                  <MinusCircleIcon
                    :class="[
                      open ? 'block' : 'hidden',
                      'h-6 w-6 transform text-gray-900',
                    ]"
                    aria-hidden="true"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p
                v-for="answer in faq.answers"
                :key="answer"
                class="text-base text-gray-500 py-2"
              >
                {{ answer }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import {
  PlusCircleIcon,
  MinusCircleIcon,
} from '@heroicons/vue/24/outline/index.js'

const faqs = [
  {
    question: 'Quais são os serviços prestados pela empresa?',
    answers: [
      'A Paranavaí.app oferece serviço de responsabilização pelo seu Google Business, ajudando o empreendimento a crescer e ser alcançado pela população local, fazendo sua empresa ser encontrada digitalmente;',

      'Coleta de dados da empresa necessários para atualização do perfil dentro do google;',

      'Atualizações de informações sob demanda;',

      'Caso a empresa não tenha uma página online própria com domínio próprio podemos fornecer a criação (facebook/instagram) para iniciar o negócio digitalmente.',

      'Será desenvolvido uma página de links para que qualquer visitante possa acessar todas as informações da empresa e consiga entrar em contato com ela. (Podendo ser utilizado na bio do instagram e até impulsionar)',

      'Anúncios dentro da página Paranavaí.app onde quem pegou o plano anual o valor pago pode ser revertido para em créditos para serem utilizados em anúncios quando o site for lançado.(Apenas quando o site for lançado)',

      'Às empresas poderão adquirir o serviço de responsabilização pelo seu Google Business ajudando o negócio do empreendedor a crescer e ser alcançado pela população local fazendo sua empresa ser encontrada digitalmente.',

      'Bônus*: (*fale com sua Account Manager)',

      'Créditos para serem utilizados como anúncios dentro do Paranavai.app quando a plataforma for lançada.',

      'Consultoria.',
    ],
  },
  {
    question: 'Quais as vantagens do associado?',
    answers: [
      'Dentro do pacote de 12 meses da start up digital , você terá acesso à:',

      'um gerente de conta que acompanhará o posicionamento digital da sua empresa e manterá seus dados atualizados',

      'uma página de links customizado para ajudar na centralização das suas informações e divulgação do seu negócio',

      'o investimento no projeto será 100% revertido em créditos para usar como anúncio em nossa plataforma assim que lançarmos.',

      'Consultorias em gestão e tecnologia gratuita. (2 indicações, só indicação que fecha)',

      'Dentro da Plataforma as vantagens serão:',

      'As empresas pagantes aparecerão primeiro na lista na hora que houver demanda dentro do paranavaí.app   (apenas para quando o site for lançado, não colocar por agora).',

      'Avaliar e salvar empresas como favoritas dentro da página  (apenas para quando o site for lançado, não colocar por agora.)',

      'Cadastrar eventos dentro do calendário da página (apenas para quando o site for lançado, não colocar por agora.)',
    ],
  },
  {
    question: 'Como eu me torno um associado?',
    answers: [
      'Assinando o contrato de prestação de serviço de 12 meses no valor 1 + 11 de R$ 49,90 você já se torna um associado da paranavai.app',

      'Para se tornar um associado é super fácil, basta você fazer o seu cadastro no nosso site, escolher qual o plano que mais te agrada, se é o gratuito ou o pago e colocar todas as informações necessárias para o seu cadastro. Nesse aspecto, as empresas não pagantes aguardarão até o lançamento do aplicativo para visualizarem seus dados dentro dele, pois, quando o aplicativo estiver pronto, já teremos empresas para colocar. (lista de espera, será notificado quando estiver no ar) (apenas para quando o site for lançado, não por agora.)',
    ],
  },
  {
    question: 'Como faço para anunciar minha empresa dentro do paranavai.app?',
    answers: [
      'Após realizar o seu cadastro dentro do Paranavai.app ou com nossa start up digital você deverá entrar em contato pelo whatsapp da paranavai.app.( apenas para quando o site for lançado)',

      'Após realizar o pagamento ou a liberação dos créditos você deverá escolher os dias que estarão disponíveis na agenda para fazer o anúncio. ( apenas para quando o site for lançado)',

      'Você deverá adicionar uma imagem para que possamos colocar no Anúncio do tamanho e formado exigido pela plataforma. ( apenas para quando o site for lançado)',

      'O  valor de 1 + 11 de R$ 49,90 será revertido para anúncios dentro da plataforma, assim deverá entrar em contato no nosso whatssapp com sua AM para ver a possibilidade dos valores revertidos.',
    ],
  },
  {
    question: 'Como funciona a forma de pagamento?',
    answers: ['O pagamento poderá ser via pix ou boleto em 1 + 11 de R$ 49,90'],
  },
  // More questions...
]
</script>
