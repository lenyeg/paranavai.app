<template>
  <div id="faq" class="bg-gray-100">
    <BaseContainer>
      <div class="py-16">
        <div class="mx-auto">
          <h2 class="mb-12 text-3xl font-bold tracking-tight text-center text-gray-700 sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <section class="flex flex-col gap-6 lg:flex-row lg:gap-12">
            <article class="flex-1 ">
              <dl class="flex flex-col gap-6 divide-y divide-gray-200 lg:flex-wrap">
                <Disclosure v-for="faq in firstColumnFaqs" :key="faq.question" v-slot="{ open }" as="div" class="flex-1 w-full pt-6 lg:max-w-1/2">
                  <dt class="text-lg">
                    <DisclosureButton class="flex items-center justify-between w-full text-left text-gray-400">
                      <span class="font-medium text-gray-900">{{
                        faq.question
                      }}</span>
                      <span class="flex items-center ml-6 h-7">
                        <PlusCircleIcon
                          :class="[
                            open ? 'hidden' : 'block',
                            'h-6 w-6 transform text-gray-700',
                          ]"
                          aria-hidden="true"
                        />
                        <MinusCircleIcon
                          :class="[
                            open ? 'block' : 'hidden',
                            'h-6 w-6 transform text-gray-700',
                          ]"
                          aria-hidden="true"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" class="pr-12 mt-2">
                    <p
                      v-for="answer in faq.answers"
                      :key="answer"
                      class="py-2 text-base text-gray-500"
                    >
                      {{ answer }}
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </dl>
            </article>
            <article class="flex-1">
              <dl class="flex flex-col gap-6 divide-y divide-gray-200 lg:flex-wrap">
                <Disclosure v-for="faq in secondColumnFaqs" :key="faq.question" v-slot="{ open }" as="div" class="flex-1 w-full pt-6 lg:max-w-1/2">
                  <dt class="text-lg">
                    <DisclosureButton class="flex items-center justify-between w-full text-left text-gray-400">
                      <span class="font-medium text-gray-900">{{
                        faq.question
                      }}</span>
                      <span class="flex items-center ml-6 h-7">
                        <PlusCircleIcon
                          :class="[
                            open ? 'hidden' : 'block',
                            'h-6 w-6 transform text-gray-700',
                          ]"
                          aria-hidden="true"
                        />
                        <MinusCircleIcon
                          :class="[
                            open ? 'block' : 'hidden',
                            'h-6 w-6 transform text-gray-700',
                          ]"
                          aria-hidden="true"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" class="pr-12 mt-2">
                    <p
                      v-for="answer in faq.answers"
                      :key="answer"
                      class="py-2 text-base text-gray-500"
                    >
                      {{ answer }}
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </dl>
            </article>
          </section>
        </div>
      </div>
    </BaseContainer>
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
    question: 'O que ?? o Startup Digital?',
    answers: [
      'O projeto Startup Digital consiste em consolidar a presen??a digital das empresas de Paranava?? atrav??s da responsabiliza????o pelo perfis delas no Google fazendo-as serem encontradas digitalmente.',

      'Ainda assim, voc?? ter?? acesso ?? um gerente de conta que acompanhar?? o posicionamento digital da sua empresa e manter?? seus dados atualizados, e uma p??gina de links customizado para ajudar na centraliza????o das suas informa????es e divulga????o do seu neg??cio.',
    ],
  },
  {
    question: 'Como funciona o Startup Digital?',
    answers: [
      'Ap??s a ades??o, o seu gerente de conta ter?? a miss??o de entender o seu neg??cio. Com isso, ser?? criado um perfil no Google para a sua empresa e n??s acompanharemos o posicionamento digital da sua empresa e manteremos seus dados atualizados.',
      'Al??m disso, ao longo do projeto, forneceremos a voc?? uma p??gina de links customizado para ajudar na centraliza????o das suas informa????es e divulga????o do seu neg??cio.'
    ],
  },
  {
    question: 'O que o gerente da minha conta poder?? fazer?',
    answers: [
      'A pessoa, que ir?? ser o seu gerente da sua conta conosco, ser?? a sua interface para com a nossa equipe interna que executar?? as atividades. Afinal, o objetivo, atrav??s dele, ?? mantermos um relacionamento de longo prazo.',
      'Al??m das nossas obriga????es para com o projeto Startup Digital, voc?? poder?? conversar com o seu gerente de conta sobre quaisquer temas relacionados ao seu neg??cio. Colaboraremos com o que for poss??vel. ????'
    ],
  },
  {
    question: 'Quanto tempo o Startup Digital dura?',
    answers: [
      'O projeto Startup Digital ?? um servi??o que ser?? executado ao longo dos 12 meses de contrato, pois a prioridade dos entreg??veis a serem feitas ?? o contrato mais antigo.',
    ],
  },
  {
    question: 'O Startup Digital ?? para mim?',
    answers: [
      'Se voc?? tem algum neg??cio (aut??nomo ou empresa de qualquer porte), provavelmente sabe da import??ncia das pessoas te encontrarem e saberem o que voc?? oferece.',
      'Atrav??s de um investimento m??nimo, n??s garantiremos que voc?? ser?? encontrado! Somos especialistas nisso. ????'
    ],
  },
  {
    question: 'Quanto custa a ades??o ao Startup Digital?',
    answers: [
      'Ao longo dos 12 meses do projeto, voc?? pagar?? uma mensalidade de R$ 49,90, ou seja, 1 + 11 de R$ 49,90 via Pix ou Boleto.'
    ],
  },
  {
    question: 'Como fa??o para aderir ao Startup Digital?',
    answers: [
      'Entre em contato conosco que ?? rapidinho... ????'
    ],
  },
  {
    question: 'Ao final do Startup Digital, vou perder minha p??gina de links?',
    answers: [
      'N??o, uma vez desenvolvida, o c??digo fonte da p??gina ser?? de c??digo aberto e voc?? poder?? fazer o que voc?? quiser com ela.',
      'Mesmo assim, o nosso projeto posterior ?? que a sua p??gina de links ??teis se torne o perfil da sua empresa dentro do nosso aplicativo.'
    ],
  },
  {
    question: 'E o que vai al??m do Startup Digital?',
    answers: [
      'Se alguma necessidade da sua empresa v?? al??m do que estamos oferecendo no projeto, entre em contato conosco para saber como podemos colaborar com a digitaliza????o da sua empresa. ????',
    ],
  },
  {
    question: 'Qual o objetivo do Startup Digital?',
    answers: [
      'Digitalizar a maior quantidade de empresas, j?? que n??s n??o aguentamos mais n??o ach??-las em Paranava??! ???? E, principalmente, com informa????es erradas. ????',
    ],
  },
  {
    question: 'N??o sou de Paranava?? e quero aderir ao Startup Digital. ?? poss??vel?',
    answers: [
      'Claro! Apesar de estarmos focando nas empresas de nossa cidade, o mundo digital ?? para todos.',
    ],
  },
]

const firstColumnFaqs = faqs.slice(0, Math.round(Number(faqs.length) / 2))
const secondColumnFaqs = faqs.slice(Math.round(Number(faqs.length) / 2), faqs.length)
</script>
