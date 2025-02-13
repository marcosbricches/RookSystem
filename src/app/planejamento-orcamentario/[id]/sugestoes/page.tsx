// src/app/planejamento-orcamentario/[id]/sugestoes/[produtoId]/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ShoppingCart,
  LineChart,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Calendar,
  BarChart3
} from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function DetalhesSugestaoPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Camarão Rosa</h1>
            <p className="text-muted-foreground mt-2">
              Análise detalhada e sugestões de compra
            </p>
          </div>
        </div>

        <Button className="flex items-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          Adicionar ao Pedido
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-muted-foreground">Consumo Médio</h3>
              <LineChart className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold">25 kg</p>
            <p className="text-sm text-muted-foreground mt-2">Por semana</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-muted-foreground">Estoque Atual</h3>
              <TrendingDown className="h-5 w-5 text-amber-500" />
            </div>
            <p className="text-3xl font-bold">8 kg</p>
            <p className="text-sm text-muted-foreground mt-2">32% do ideal</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-muted-foreground">Quantidade Sugerida</h3>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold">20 kg</p>
            <p className="text-sm text-muted-foreground mt-2">Para próxima semana</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Histórico de Consumo</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">Última Semana</p>
                  <p className="text-sm text-muted-foreground">07/01 - 13/01</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">23 kg</p>
                  <p className="text-sm text-muted-foreground">R$ 1.955,00</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">Duas Semanas Atrás</p>
                  <p className="text-sm text-muted-foreground">31/12 - 06/01</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">26 kg</p>
                  <p className="text-sm text-muted-foreground">R$ 2.210,00</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">Três Semanas Atrás</p>
                  <p className="text-sm text-muted-foreground">24/12 - 30/12</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">28 kg</p>
                  <p className="text-sm text-muted-foreground">R$ 2.380,00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Histórico de Preços</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">Última Compra</p>
                  <p className="text-sm text-muted-foreground">10/01/2025</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">R$ 85,00/kg</p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingDown className="h-3 w-3" />
                    2.3% menor
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">Compra Anterior</p>
                  <p className="text-sm text-muted-foreground">03/01/2025</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">R$ 87,00/kg</p>
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    1.2% maior
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Recomendações</AlertTitle>
          <AlertDescription>
            <ul className="space-y-1 mt-2">
              <li>O consumo está estável com leve tendência de queda</li>
              <li>Os preços estão favoráveis para compra neste momento</li>
              <li>Sugerimos compra de 20kg para manter o estoque ideal</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}