// app/onboarding/relatorios/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, FileBarChart, PieChart, LineChart, BarChart3, TrendingUp, Lightbulb } from "lucide-react"
import Link from "next/link"

const ReportCard = ({ 
  icon: Icon, 
  title, 
  description, 
  preview 
}: { 
  icon: any
  title: string
  description: string
  preview: string
}) => (
  <Card className="border-0 shadow-sm hover:shadow-md transition-all group cursor-pointer">
    <CardContent className="p-6">
      <div className="flex gap-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="mt-4 aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
        <img 
          src={preview} 
          alt={`Preview do relatório ${title}`}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
      </div>
    </CardContent>
  </Card>
)

export default function OnboardingRelatoriosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Progresso */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Etapa 4 de 4</span>
            <div className="flex items-center gap-2">
              <Progress value={100} className="w-32 h-2" />
              <span>100%</span>
            </div>
          </div>

          {/* Cabeçalho */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <FileBarChart className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Conheça os Relatórios
            </h1>
            <p className="text-gray-600 max-w-lg mx-auto">
              Explore os principais relatórios disponíveis para acompanhar o desempenho do seu negócio
            </p>
          </div>

          {/* Dica */}
          <Card className="border-0 shadow-lg bg-blue-50 border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="p-2 rounded-full bg-blue-100">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-900">Dica importante</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Todos os relatórios podem ser exportados em PDF ou Excel. Configure alertas para receber notificações quando métricas importantes mudarem.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Grid de Relatórios */}
          <div className="grid md:grid-cols-2 gap-6">
            <ReportCard
              icon={PieChart}
              title="CMV por Categoria"
              description="Análise detalhada do Custo da Mercadoria Vendida por categoria de produto"
              preview="/previews/cmv-chart.jpg"
            />

            <ReportCard
              icon={LineChart}
              title="Faturamento Mensal"
              description="Acompanhamento do faturamento com comparativos e metas"
              preview="/previews/revenue-chart.jpg"
            />

            <ReportCard
              icon={BarChart3}
              title="Análise de Estoque"
              description="Controle de estoque com pontos de reposição e giro de produtos"
              preview="/previews/stock-chart.jpg"
            />

            <ReportCard
              icon={TrendingUp}
              title="Indicadores Financeiros"
              description="Principais KPIs do seu negócio em um único lugar"
              preview="/previews/kpi-chart.jpg"
            />
          </div>

          {/* Painel de Conclusão */}
          <Card className="border-0 shadow-lg bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">
                Parabéns! Seu onboarding está completo!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-green-700">
                Você configurou com sucesso:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Dados do restaurante",
                  "Configurações iniciais",
                  "Planejamento orçamentário",
                  "Relatórios principais"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-green-700">
                    <div className="h-2 w-2 bg-green-500 rounded-full" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navegação */}
          <div className="flex justify-between pt-4">
            <Link href="/onboarding/planejamento">
              <Button variant="outline">Voltar</Button>
            </Link>
            <Link href="/dashboard">
              <Button className="gap-2">
                Ir para o Dashboard
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}