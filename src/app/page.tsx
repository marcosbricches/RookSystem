import Head from 'next/head'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogTitle } from "@/components/ui/alert-dialog"

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Rook System - Gestão Inteligente para Restaurantes</title>
        <meta name="description" content="Sistema SaaS para planejamento orçamentário e gestão operacional de restaurantes. Automatize processos financeiros, compras e controle de estoque." />
        <meta name="keywords" content="gestão restaurantes, controle financeiro, automação processos, planejamento orçamentário, CMV restaurantes" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Rook System - Gestão Inteligente para Restaurantes" />
        <meta property="og:description" content="Sistema SaaS para planejamento orçamentário e gestão operacional de restaurantes." />
        <meta property="og:type" content="website" />
        
        {/* Scripts de rastreamento */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'seu-pixel-id');
              fbq('track', 'PageView');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=seu-id-google" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'seu-id-google');
            `,
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white border-b z-50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">Rook System</div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">Fale Conosco</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Entre em contato</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Input placeholder="Nome completo" />
                  <Input type="email" placeholder="Email" />
                  <Input placeholder="Telefone" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de solicitação" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sugestao">Sugestão</SelectItem>
                      <SelectItem value="duvida">Dúvida</SelectItem>
                      <SelectItem value="elogio">Elogio</SelectItem>
                      <SelectItem value="problema">Problema</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Sua mensagem" />
                  <Button className="w-full">Enviar mensagem</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transforme a gestão do seu restaurante
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Automatize processos financeiros, otimize compras e controle seu estoque com uma solução completa
              </p>
              <Button size="lg" className="text-lg px-8">Começar agora</Button>
            </div>
          </div>
        </section>

        {/* Desafios Section */}
        <section className="py-16 bg-white" id="desafios">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Os desafios que você enfrenta</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Controle Financeiro Manual",
                  description: "Planilhas complexas e processos manuais que consomem tempo precioso"
                },
                {
                  title: "Gestão de Estoque",
                  description: "Dificuldade em controlar entrada e saída de produtos de forma eficiente"
                },
                {
                  title: "Custos Operacionais",
                  description: "Falta de visibilidade clara sobre custos e margens de lucro"
                }
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-lg border bg-white shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformamos Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Como transformamos seu negócio</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Planejamento Orçamentário",
                  description: "Ferramentas avançadas para projeção e controle orçamentário, permitindo decisões estratégicas baseadas em dados"
                },
                {
                  title: "Cálculo de CMV",
                  description: "Automatização do cálculo de Custo da Mercadoria Vendida, com análises detalhadas por produto e categoria"
                },
                {
                  title: "Previsão de Crescimento",
                  description: "Análises preditivas e insights para projetar crescimento e identificar oportunidades de expansão"
                },
                {
                  title: "Automação Financeira",
                  description: "Processos financeiros automatizados que eliminam trabalho manual e reduzem erros operacionais"
                }
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-lg bg-white shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossa Solução Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossa solução para você</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Plataforma Integrada</h3>
                  <p className="text-gray-600">
                    Uma solução completa que centraliza todas as operações do seu restaurante em um único lugar, 
                    eliminando a necessidade de múltiplas ferramentas e planilhas.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Automação Inteligente</h3>
                  <p className="text-gray-600">
                    Automatize processos críticos como controle de estoque, cálculo de custos e gestão financeira, 
                    liberando tempo para focar no crescimento do seu negócio.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Análises em Tempo Real</h3>
                  <p className="text-gray-600">
                    Dashboards intuitivos e relatórios detalhados que proporcionam visibilidade completa sobre 
                    o desempenho do seu restaurante, permitindo decisões mais assertivas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ana Silva",
                  role: "Proprietária do Restaurante Sabor & Arte",
                  text: "O Rook System transformou completamente nossa gestão financeira. Economizamos tempo e temos mais controle."
                },
                {
                  name: "Carlos Santos",
                  role: "Gerente do Bistro Mar & Terra",
                  text: "A automação dos processos nos permitiu focar no que realmente importa: nossos clientes."
                },
                {
                  name: "Marina Costa",
                  role: "Diretora do Restaurante Quinta",
                  text: "O controle de estoque ficou muito mais simples e preciso com o Rook System."
                }
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-lg bg-white shadow-sm">
                  <p className="text-gray-600 mb-4">"{item.text}"</p>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Como funciona a integração com ERPs?",
                  answer: "O Rook System oferece integração simplificada com os principais ERPs do mercado através de APIs seguras."
                },
                {
                  question: "Como é calculado o CMV na plataforma?",
                  answer: "O cálculo do CMV é automatizado considerando todos os custos diretos envolvidos na produção."
                },
                {
                  question: "Qual é a duração do período Freemium?",
                  answer: "Oferecemos 14 dias de acesso completo à plataforma para você testar todas as funcionalidades."
                }
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Rook System</h3>
                <p className="text-gray-400">Transformando a gestão de restaurantes</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-400 hover:text-white">Facebook</a>
                  <a href="#" className="block text-gray-400 hover:text-white">Instagram</a>
                  <a href="#" className="block text-gray-400 hover:text-white">LinkedIn</a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-400 hover:text-white">Sobre nós</a>
                  <a href="#" className="block text-gray-400 hover:text-white">Política de Privacidade</a>
                  <a href="#" className="block text-gray-400 hover:text-white">Termos de Uso</a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contato</h3>
                <p className="text-gray-400">contato@rooksystem.com</p>
                <p className="text-gray-400">(11) 9999-9999</p>
              </div>
            </div>
          </div>
        </footer>

        {/* LGPD Cookie Consent */}
        <AlertDialog defaultOpen>
          <AlertDialogContent>
            <AlertDialogTitle>Cookies e Privacidade</AlertDialogTitle>
            <AlertDialogDescription>
              Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa Política de Privacidade.
            </AlertDialogDescription>
            <AlertDialogAction>Aceitar</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  )
}