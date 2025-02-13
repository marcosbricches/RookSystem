// src/app/planejamento-orcamentario/[id]/cmv/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  FileSpreadsheet,
  TrendingDown,
  AlertCircle,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3
} from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function CmvPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/planejamento-orcamentario/1">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Análise de CMV</h1>
            <p className="text-muted-foreground mt-2">
              Janeiro 2025 - Custo de Mercadoria Vendida
            </p>
          </div>
        </div>

        <Button variant="outline" className="flex items-center gap-2">
          <FileSpreadsheet className="h-4 w-4" />
          Exportar Relatório
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-green-700">CMV Atual</h3>
              <TrendingDown className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-green-700">31.5%</p>
            <div className="flex items-center gap-1 mt-2 text-green-600">
              <ArrowDownRight className="h-4 w-4" />
              <span className="text-sm">2.5% menor que o mês anterior</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-muted-foreground">CMV Meta</h3>
              <BarChart3 className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold">32.0%</p>
            <p className="text-sm text-muted-foreground mt-2">Meta estabelecida</p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-blue-700">Média do Setor</h3>
              <BarChart3 className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-blue-700">33.0%</p>
            <div className="flex items-center gap-1 mt-2 text-blue-600">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm">1.5% acima do seu CMV</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">Cálculo do CMV</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <span className="font-medium">Estoque Inicial</span>
                <span className="font-semibold">R$ 85.000,00</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <span className="font-medium">( + ) Compras do Período</span>
                <span className="font-semibold">R$ 125.000,00</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <span className="font-medium">( - ) Estoque Final</span>
                <span className="font-semibold">R$ 78.500,00</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <span className="font-medium text-green-700">( = ) CMV Total</span>
                <span className="font-semibold text-green-700">R$ 131.500,00</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <span className="font-medium text-blue-700">Faturamento Total</span>
                <span className="font-semibold text-blue-700">R$ 398.500,00</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-green-100 rounded-lg">
                <span className="font-medium text-green-800">CMV Percentual</span>
                <span className="font-semibold text-green-800">31.5%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">Análise por Categoria</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">Proteína Animal</p>
                  <p className="text-sm text-muted-foreground">45% do CMV total</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">R$ 59.175,00</p>
                  <p className="text-sm text-muted-foreground">14.2% do faturamento</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">Grãos e Cereais</p>
                  <p className="text-sm text-muted-foreground">25% do CMV total</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">R$ 32.875,00</p>
                  <p className="text-sm text-muted-foreground">7.9% do faturamento</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">Laticínios</p>
                  <p className="text-sm text-muted-foreground">30% do CMV total</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">R$ 39.450,00</p>
                  <p className="text-sm text-muted-foreground">9.4% do faturamento</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerta quando CMV está fora da faixa ideal */}
        <Alert variant="default" className="bg-amber-50 border-amber-200">
          <AlertCircle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-600">Recomendações para Otimização</AlertTitle>
          <AlertDescription className="text-amber-700">
            <p className="mb-2">Seu CMV está próximo do limite ideal (30-32%). Considere as seguintes ações:</p>
            <ul className="space-y-1 ml-6 list-disc">
              <li>Renegociar preços com fornecedores de proteínas</li>
              <li>Revisar porcionamento dos pratos principais</li>
              <li>Analisar desperdício na preparação</li>
            </ul>
          </AlertDescription>
        </Alert>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Análises Relacionadas</h2>
            
            <div className="space-y-2">
              <Link href="/planejamento-orcamentario/1/compras">
                <Button variant="ghost" className="w-full justify-between">
                  <span>Ver Compras Categorizadas</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              
              <Link href="/planejamento-orcamentario/1/sugestoes">
                <Button variant="ghost" className="w-full justify-between">
                  <span>Ver Sugestões de Compras</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}