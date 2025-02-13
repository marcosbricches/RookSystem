// src/app/planejamento-orcamentario/[id]/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Edit,
  LineChart,
  ShoppingBag,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Building2,
  Users
} from "lucide-react"

export default function ViewPlanejamentoPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/planejamento-orcamentario">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Janeiro 2025</h1>
            <p className="text-muted-foreground mt-2">
              Visualização detalhada do planejamento
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href="/planejamento-orcamentario/1/cmv">
            <Button variant="outline" className="flex items-center gap-2">
              <LineChart className="h-4 w-4" />
              CMV
            </Button>
          </Link>
          <Link href="/planejamento-orcamentario/1/compras">
            <Button variant="outline" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Compras
            </Button>
          </Link>
          <Link href="/planejamento-orcamentario/1/sugestoes">
            <Button variant="outline" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Sugestões
            </Button>
          </Link>
          <Link href="/planejamento-orcamentario/1/edit">
            <Button className="flex items-center gap-2">
              <Edit className="h-4 w-4" />
              Editar
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-green-50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-green-700">CMV</p>
                <p className="text-2xl font-bold text-green-700">31.5%</p>
              </div>
              <TrendingDown className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-xs text-green-600 mt-2">
              2.5% menor que o mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-blue-700">Margem de Contribuição</p>
                <p className="text-2xl font-bold text-blue-700">R$ 125.430,00</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-xs text-blue-600 mt-2">
              5.8% maior que o mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="bg-purple-50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-purple-700">Lucro Operacional</p>
                <p className="text-2xl font-bold text-purple-700">R$ 45.890,00</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
            <p className="text-xs text-purple-600 mt-2">
              3.2% maior que o mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Dados Financeiros</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6">
              <div>
                <p className="text-sm text-muted-foreground">Estoque Inicial</p>
                <p className="text-lg font-semibold">R$ 85.000,00</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Compras do Período</p>
                <p className="text-lg font-semibold">R$ 125.000,00</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Estoque Final</p>
                <p className="text-lg font-semibold">R$ 78.500,00</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Faturamento Total</p>
                <p className="text-lg font-semibold">R$ 398.500,00</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Ticket Médio</p>
                <p className="text-lg font-semibold">R$ 85,00</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Número de Clientes</p>
                <p className="text-lg font-semibold">4.688</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Despesas Fixas</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 mb-8">
              <div>
                <p className="text-sm text-muted-foreground">Aluguel</p>
                <p className="text-lg font-semibold">R$ 15.000,00</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Folha de Pagamento</p>
                <p className="text-lg font-semibold">R$ 45.000,00</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Gorjetas</p>
                <p className="text-lg font-semibold">R$ 12.500,00</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <Users className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Despesas Variáveis</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6">
              <div>
                <p className="text-sm text-muted-foreground">Marketing</p>
                <p className="text-lg font-semibold">R$ 8.500,00</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Impostos Operacionais</p>
                <p className="text-lg font-semibold">R$ 25.000,00</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Serviços Públicos</p>
                <p className="text-lg font-semibold">R$ 12.000,00</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Manutenção</p>
                <p className="text-lg font-semibold">R$ 5.500,00</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Delivery</p>
                <p className="text-lg font-semibold">R$ 15.000,00</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Outras Variáveis</p>
                <p className="text-lg font-semibold">R$ 8.000,00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}