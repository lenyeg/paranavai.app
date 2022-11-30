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
    question: 'O que é o Startup Digital?',
    answers: [
      'O projeto Startup Digital consiste em consolidar a presença digital das empresas de Paranavaí através da responsabilização pelo perfis delas no Google fazendo-as serem encontradas digitalmente.',

      'Ainda assim, você terá acesso à um gerente de conta que acompanhará o posicionamento digital da sua empresa e manterá seus dados atualizados, e uma página de links customizado para ajudar na centralização das suas informações e divulgação do seu negócio.',
    ],
  },
  {
    question: 'Como funciona o Startup Digital?',
    answers: [
      'Após a adesão, o seu gerente de conta terá a missão de entender o seu negócio. Com isso, será criado um perfil no Google para a sua empresa e nós acompanharemos o posicionamento digital da sua empresa e manteremos seus dados atualizados.',
      'Além disso, ao longo do projeto, forneceremos a você uma página de links customizado para ajudar na centralização das suas informações e divulgação do seu negócio.'
    ],
  },
  {
    question: 'O que o gerente da minha conta poderá fazer?',
    answers: [
      'A pessoa, que irá ser o seu gerente da sua conta conosco, será a sua interface para com a nossa equipe interna que executará as atividades. Afinal, o objetivo, através dele, é mantermos um relacionamento de longo prazo.',
      'Além das nossas obrigações para com o projeto Startup Digital, você poderá conversar com o seu gerente de conta sobre quaisquer temas relacionados ao seu negócio. Colaboraremos com o que for possível. 🥰'
    ],
  },
  {
    question: 'Quanto tempo o Startup Digital dura?',
    answers: [
      'O projeto Startup Digital é um serviço que será executado ao longo dos 12 meses de contrato, pois a prioridade dos entregáveis a serem feitas é o contrato mais antigo.',
    ],
  },
  {
    question: 'O Startup Digital é para mim?',
    answers: [
      'Se você tem algum negócio (autônomo ou empresa de qualquer porte), provavelmente sabe da importância das pessoas te encontrarem e saberem o que você oferece.',
      'Através de um investimento mínimo, nós garantiremos que você será encontrado! Somos especialistas nisso. 😉'
    ],
  },
  {
    question: 'Quanto custa a adesão ao Startup Digital?',
    answers: [
      'Ao longo dos 12 meses do projeto, você pagará uma mensalidade de R$ 49,90, ou seja, 1 + 11 de R$ 49,90 via Pix ou Boleto.'
    ],
  },
  {
    question: 'Como faço para aderir ao Startup Digital?',
    answers: [
      'Entre em contato conosco que é rapidinho... 🥰'
    ],
  },
  {
    question: 'Ao final do Startup Digital, vou perder minha página de links?',
    answers: [
      'Não, uma vez desenvolvida, o código fonte da página será de código aberto e você poderá fazer o que você quiser com ela.',
      'Mesmo assim, o nosso projeto posterior é que a sua página de links úteis se torne o perfil da sua empresa dentro do nosso aplicativo.'
    ],
  },
  {
    question: 'E o que vai além do Startup Digital?',
    answers: [
      'Se alguma necessidade da sua empresa vá além do que estamos oferecendo no projeto, entre em contato conosco para saber como podemos colaborar com a digitalização da sua empresa. 🤗',
    ],
  },
  {
    question: 'Qual o objetivo do Startup Digital?',
    answers: [
      'Digitalizar a maior quantidade de empresas, já que nós não aguentamos mais não achá-las em Paranavaí! 😡 E, principalmente, com informações erradas. 🤬',
    ],
  },
  {
    question: 'Não sou de Paranavaí e quero aderir ao Startup Digital. É possível?',
    answers: [
      'Claro! Apesar de estarmos focando nas empresas de nossa cidade, o mundo digital é para todos.',
    ],
  },
]

const firstColumnFaqs = faqs.slice(0, Math.round(Number(faqs.length) / 2))
const secondColumnFaqs = faqs.slice(Math.round(Number(faqs.length) / 2), faqs.length)
</script>
