// app/planos/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  AlertCircle,
  BarChart3, 
  CheckCircle, 
  Clock, 
  CreditCard, 
  Headphones, 
  HeartHandshake, 
  Info, 
  Shield, 
  Star, 
  Users,
  X 
} from "lucide-react"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface PageProps {
  params: {
    id: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function PlanoDetalhesPage({ params, searchParams }: PageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto py-16">
        {/* Header com breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/planos" className="hover:text-primary transition-colors">
              Planos
            </Link>
            <span>/</span>
            <span>Plano Avançado</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">Plano Avançado</h1>
                <Badge className="bg-primary hover:bg-primary">Mais Popular</Badge>
              </div>
              <p className="text-xl text-muted-foreground">
                A solução completa para restaurantes em crescimento
              </p>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">R$ 199</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <Link href={`/planos/${params.id}/checkout`} className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto px-8">
                  Começar agora
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Benefícios em destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-primary/5 border-primary/10">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Segurança Garantida</h3>
                  <p className="text-sm text-muted-foreground">
                    Seus dados protegidos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/10">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Implementação Rápida</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure em 24 horas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/10">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <HeartHandshake className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Suporte Dedicado</h3>
                  <p className="text-sm text-muted-foreground">
                    Atendimento prioritário
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs de detalhes */}
        <Tabs defaultValue="recursos" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 lg:max-w-[600px]">
            <TabsTrigger value="recursos">Recursos</TabsTrigger>
            <TabsTrigger value="comparativo">Comparativo</TabsTrigger>
            <TabsTrigger value="casos">Casos de Uso</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          {/* Tab Recursos */}
          <TabsContent value="recursos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Gestão Financeira
                  </h3>
                  <ul className="space-y-4">
                    <TooltipProvider>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="font-medium">DRE Automático</span>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-56">
                                  Demonstrativo de resultados gerado automaticamente
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            Acompanhe seus resultados em tempo real
                          </p>
                        </div>
                      </li>
                    </TooltipProvider>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab Comparativo */}
          <TabsContent value="comparativo">
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px]">Recurso</TableHead>
                      <TableHead>Básico</TableHead>
                      <TableHead>Avançado</TableHead>
                      <TableHead>Premium</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Usuários inclusos</TableCell>
                      <TableCell>3 usuários</TableCell>
                      <TableCell>10 usuários</TableCell>
                      <TableCell>Ilimitado</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Gestão financeira</TableCell>
                      <TableCell>Básica</TableCell>
                      <TableCell>Avançada</TableCell>
                      <TableCell>Completa</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Suporte</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Email + Chat</TableCell>
                      <TableCell>Prioritário</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab Casos de Uso */}
          <TabsContent value="casos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Depoimentos */}
              <Card>
                <CardHeader>
                  <CardTitle>Depoimentos de clientes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/avatars/01.png" />
                      <AvatarFallback>MP</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">Maria Paula</h4>
                      <p className="text-sm text-muted-foreground">Restaurante Sabor & Arte</p>
                      <p className="mt-2">
                        "O sistema revolucionou nossa gestão financeira. Conseguimos 
                        reduzir custos em 25% já no primeiro mês."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resultados */}
              <Card>
                <CardHeader>
                  <CardTitle>Resultados comprovados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Redução de custos</h4>
                      <p className="text-sm text-muted-foreground">
                        Média de 30% de economia em compras
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab FAQ */}
          <TabsContent value="faq">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Como funciona o período de teste?
                      </h4>
                      <p className="text-muted-foreground">
                        Você tem 14 dias para testar todos os recursos do plano 
                        escolhido, sem compromisso.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2">
                        Posso mudar de plano depois?
                      </h4>
                      <p className="text-muted-foreground">
                        Sim! Você pode fazer upgrade ou downgrade do seu plano a 
                        qualquer momento.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Final */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Pronto para transformar seu restaurante?
          </h2>
          <div className="flex items-center justify-center gap-4">
            <Link href={`/planos/${params.id}/checkout`}>
              <Button size="lg" className="gap-2">
                <CreditCard className="h-4 w-4" />
                Assinar agora
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg">
                Agendar demonstração
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}