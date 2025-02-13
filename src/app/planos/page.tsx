// app/planos/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { CheckCircle, Crown, Star, Info, ArrowRight, HeadphonesIcon } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function PlanosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Banner Informativo */}
      <div className="bg-primary/5 border-b">
        <div className="container py-3">
          <p className="text-sm text-center text-muted-foreground">
            🎉 Promoção de lançamento: Ganhe 2 meses grátis nos planos anuais! 
            <Button variant="link" className="text-sm font-medium">
              Saiba mais <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </p>
        </div>
      </div>

      <div className="container mx-auto py-16">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Escolha o plano ideal para seu restaurante
          </h1>
          <p className="text-xl text-muted-foreground">
            Otimize seus processos com nossa solução completa de gestão. 
            Comece hoje e transforme seu negócio.
          </p>
        </div>

        {/* Toggle Mensal/Anual - será implementado depois */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <Button variant="ghost" className="relative">
              Mensal
              <Badge className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px]">
                Popular
              </Badge>
            </Button>
            <Button variant="default">
              Anual
              <Badge variant="secondary" className="ml-2 px-2 py-0.5 text-[10px]">
                -20%
              </Badge>
            </Button>
          </div>
        </div>

        {/* Cards dos Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plano Básico */}
          <Card className="relative flex flex-col border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CheckCircle className="h-6 w-6 text-primary" />
                Básico
              </CardTitle>
              <CardDescription className="text-base">
                Ideal para pequenos estabelecimentos
              </CardDescription>
              <div className="mt-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">R$ 99</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Cobrado mensalmente
                </p>
              </div>
            </CardHeader>

            <CardContent className="flex-grow">
              <ul className="space-y-4">
                <TooltipProvider>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span>Controle financeiro básico</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-56">
                              Inclui fluxo de caixa, controle de despesas e relatórios básicos
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Gerencie suas finanças com facilidade
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span>Gestão de estoque simplificada</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-56">
                              Controle de entrada e saída, alertas de estoque baixo
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Mantenha seu estoque sob controle
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span>3 usuários inclusos</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-56">
                              Ideal para pequenas equipes, com possibilidade de expansão
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Colabore com sua equipe
                      </p>
                    </div>
                  </li>
                </TooltipProvider>
              </ul>
            </CardContent>

            <CardFooter className="pt-8">
              <Link href="/planos/basico" className="w-full">
                <Button className="w-full" size="lg">
                  Começar agora
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Plano Avançado */}
          <Card className="relative flex flex-col border-2 border-primary transition-all duration-300 hover:shadow-lg shadow-md">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-primary hover:bg-primary px-4 py-1">
                Mais Popular
              </Badge>
            </div>

            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Star className="h-6 w-6 text-primary" />
                Avançado
              </CardTitle>
              <CardDescription className="text-base">
                Para restaurantes em crescimento
              </CardDescription>
              <div className="mt-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">R$ 199</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Cobrado mensalmente
                </p>
              </div>
            </CardHeader>

            <CardContent className="flex-grow">
              <ul className="space-y-4">
                <TooltipProvider>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span>Tudo do plano Básico</span>
                        <Badge variant="secondary" className="ml-1">
                          +
                        </Badge>
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span>Controle financeiro avançado</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-56">
                              DRE automático, análise de custos e projeções financeiras
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Análises detalhadas do seu negócio
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span>Gestão de fornecedores</span>
                        <Badge variant="secondary" className="ml-1">
                          Novo
                        </Badge>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-56">
                              Cadastro, cotações e pedidos automáticos
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Otimize suas compras
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span>10 usuários inclusos</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-56">
                              Ideal para equipes médias, com controle de permissões
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Gerencie sua equipe
                      </p>
                    </div>
                  </li>
                </TooltipProvider>
              </ul>
            </CardContent>

            <CardFooter className="pt-8">
              <Link href="/planos/avancado" className="w-full">
                <Button className="w-full" size="lg" variant="default">
                  Escolher plano
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Plano Premium */}
          <Card className="relative flex flex-col border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Crown className="h-6 w-6 text-primary" />
                Premium
              </CardTitle>
              <CardDescription className="text-base">
                Solução completa para redes
              </CardDescription>
              <div className="mt-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">R$ 399</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Cobrado mensalmente
                </p>
              </div>
            </CardHeader>

            <CardContent className="flex-grow">
              <ul className="space-y-4">
                <TooltipProvider>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span>Tudo do plano Avançado</span>
                        <Badge variant="secondary" className="ml-1">
                          +
                        </Badge>
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span>Gestão multi-unidades</span>
                        <Badge variant="secondary" className="ml-1">
                          Premium
                        </Badge>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-56">
                              Controle centralizado de múltiplas unidades
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Gerencie sua rede de restaurantes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span>Business Intelligence</span>
                        <Badge variant="secondary" className="ml-1">
                          Premium
                        </Badge>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-56">
                              Dashboards personalizados e insights avançados
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Tome decisões baseadas em dados
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span>Usuários ilimitados</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-56">
                              Permissões avançadas e controle total de acessos
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Escale sem limitações
                      </p>
                    </div>
                  </li>
                </TooltipProvider>
              </ul>
            </CardContent>

            <CardFooter className="pt-8">
              <Link href="/planos/premium" className="w-full">
                <Button className="w-full" size="lg">
                  Contratar Premium
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Seção de Suporte e FAQ */}
        <div className="mt-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Precisa de ajuda para escolher?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nossa equipe está pronta para ajudar você a escolher o melhor plano para seu negócio.
              Agende uma demonstração gratuita e tire todas suas dúvidas.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contato">
                <Button variant="outline" className="gap-2">
                  <HeadphonesIcon className="h-4 w-4" />
                  Falar com consultor
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="default" className="gap-2">
                  Agendar demonstração
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* FAQ Rápido */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Posso trocar de plano?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento, 
                    sem custos adicionais.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Preciso de cartão de crédito?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Não! Oferecemos diversas formas de pagamento, incluindo boleto 
                    bancário e PIX.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Existe período de fidelidade?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Não há fidelidade! Você pode cancelar sua assinatura a 
                    qualquer momento sem multa.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Tenho suporte incluso?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sim! Todos os planos incluem suporte via chat, email e 
                    WhatsApp em horário comercial.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}