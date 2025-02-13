// src/app/results/forecasting/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  TrendingUp,
  ArrowLeft,
  BarChart,
  Target,
  AlertCircle
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ForecastingPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="/results/overview">
              <ArrowLeft className="h-4 w-4" />
            </a>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Previsões de Crescimento</h1>
            <p className="text-muted-foreground">Próximos 6 meses</p>
          </div>
        </div>
      </div>

      <Alert>
        <Target className="h-4 w-4" />
        <AlertTitle>Análise baseada em histórico</AlertTitle>
        <AlertDescription>
          As previsões são calculadas com base nos últimos 6 meses de operação e consideram
          sazonalidade e tendências de mercado.
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <TrendingUp className="h-4 w-4" />
              Cenário Otimista
            </CardTitle>
            <CardDescription>
              Crescimento acelerado mantendo eficiência operacional
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Crescimento Previsto</span>
                <Badge variant="success">25%</Badge>
              </div>
              <Progress value={25} className="bg-green-100" />
            </div>

            <Separator />

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Faturamento Mensal</TableCell>
                  <TableCell>R$ 155.937,50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CMV Projetado</TableCell>
                  <TableCell>29.8%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lucro Esperado</TableCell>
                  <TableCell>R$ 58.799,00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              Cenário Realista
            </CardTitle>
            <CardDescription>
              Crescimento estável com ajustes operacionais
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Crescimento Previsto</span>
                <Badge>15%</Badge>
              </div>
              <Progress value={15} />
            </div>

            <Separator />

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Faturamento Mensal</TableCell>
                  <TableCell>R$ 143.462,50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CMV Projetado</TableCell>
                  <TableCell>31.0%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lucro Esperado</TableCell>
                  <TableCell>R$ 52.014,50</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-600">
              <AlertCircle className="h-4 w-4" />
              Cenário Conservador
            </CardTitle>
            <CardDescription>
              Crescimento moderado com foco em estabilidade
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Crescimento Previsto</span>
                <Badge variant="secondary">8%</Badge>
              </div>
              <Progress value={8} className="bg-yellow-100" />
            </div>

            <Separator />

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Faturamento Mensal</TableCell>
                  <TableCell>R$ 134.730,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CMV Projetado</TableCell>
                  <TableCell>31.5%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lucro Esperado</TableCell>
                  <TableCell>R$ 48.848,50</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recomendações para Crescimento</CardTitle>
          <CardDescription>
            Ações sugeridas para atingir as metas de crescimento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Área</TableHead>
                <TableHead>Ação Recomendada</TableHead>
                <TableHead>Impacto Esperado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Compras</TableCell>
                <TableCell>Renegociação com fornecedores principais</TableCell>
                <TableCell>Redução de 0.5% no CMV</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Marketing</TableCell>
                <TableCell>Campanha de fidelidade para clientes frequentes</TableCell>
                <TableCell>Aumento de 10% no ticket médio</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Operacional</TableCell>
                <TableCell>Otimização do cardápio com foco em itens mais rentáveis</TableCell>
                <TableCell>Aumento de 2% na margem de contribuição</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}