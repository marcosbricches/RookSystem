// src/app/results/overview/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  LineChart, 
  BarChart, 
  DollarSign, 
  Percent, 
  TrendingUp, 
  Users, 
  Package
} from "lucide-react"

export default function ResultsOverviewPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard de Resultados</h1>
        
        <Tabs defaultValue="month" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="week">Semana</TabsTrigger>
            <TabsTrigger value="month">Mês</TabsTrigger>
            <TabsTrigger value="quarter">Trimestre</TabsTrigger>
            <TabsTrigger value="year">Ano</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faturamento Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 124.750,00</div>
            <p className="text-xs text-muted-foreground">
              +20.1% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CMV</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">31.2%</div>
            <p className="text-xs text-muted-foreground">
              Dentro da meta (30-32%)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lucro Operacional</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 45.230,00</div>
            <p className="text-xs text-muted-foreground">
              +15.3% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
      <Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <LineChart className="h-4 w-4" />
      Evolução do Faturamento
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Janeiro</span>
        <span>R$ 82.500,00</span>
      </div>
      <Progress value={65} />
    </div>
    <Separator />

    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Fevereiro</span>
        <span>R$ 87.300,00</span>
      </div>
      <Progress value={70} />
    </div>
    <Separator />

    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Março</span>
        <span>R$ 95.600,00</span>
      </div>
      <Progress value={76} />
    </div>
    <Separator />

    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Abril</span>
        <span>R$ 102.400,00</span>
      </div>
      <Progress value={82} />
    </div>
    <Separator />

    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Maio</span>
        <span>R$ 108.900,00</span>
      </div>
      <Progress value={87} />
    </div>
    <Separator />

    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Junho</span>
        <span>R$ 124.750,00</span>
      </div>
      <Progress value={100} />
    </div>
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <BarChart className="h-4 w-4" />
      CMV por Categoria
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Pratos Principais</span>
        <span>33.5%</span>
      </div>
      <Progress value={33.5} />
    </div>
    <Separator />

    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Bebidas</span>
        <span>28.4%</span>
      </div>
      <Progress value={28.4} />
    </div>
    <Separator />

    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Sobremesas</span>
        <span>31.2%</span>
      </div>
      <Progress value={31.2} />
    </div>
    <Separator />

    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Entradas</span>
        <span>30.8%</span>
      </div>
      <Progress value={30.8} />
    </div>
  </CardContent>
</Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 85,50</div>
            <p className="text-xs text-muted-foreground">
              +5.2% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Atendidos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.458</div>
            <p className="text-xs text-muted-foreground">
              +12.5% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estoque em Dias</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 dias</div>
            <p className="text-xs text-muted-foreground">
              Dentro da meta (12-15 dias)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}