// src/app/results/[period]/compare/page.tsx
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
  ArrowLeft,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  CheckCircle2,
  Download
} from "lucide-react"

export default function ComparisonPage({ params }: { params: { period: string } }) {
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
            <h1 className="text-3xl font-bold tracking-tight">Planejado vs Realizado</h1>
            <p className="text-muted-foreground">Junho 2024</p>
          </div>
        </div>

        <Button>
          <Download className="mr-2 h-4 w-4" />
          Exportar Comparativo
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Indicadores Principais</CardTitle>
            <CardDescription>Comparativo dos principais indicadores financeiros</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Faturamento</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Meta: R$ 120.000,00</Badge>
                  <Badge variant="success">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    +4%
                  </Badge>
                </div>
              </div>
              <Progress value={104} className="h-3" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Realizado: R$ 124.750,00</span>
                <span>Variação: +R$ 4.750,00</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>CMV</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Meta: 30.0%</Badge>
                  <Badge variant="destructive">
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                    +1.2%
                  </Badge>
                </div>
              </div>
              <Progress value={96} className="h-3" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Realizado: 31.2%</span>
                <span>Variação: +1.2%</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Lucro Operacional</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Meta: R$ 42.000,00</Badge>
                  <Badge variant="success">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    +7%
                  </Badge>
                </div>
              </div>
              <Progress value={107} className="h-3" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Realizado: R$ 45.230,00</span>
                <span>Variação: +R$ 3.230,00</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análise de Desvios</CardTitle>
            <CardDescription>Principais variações identificadas no período</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 font-medium">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                CMV acima da meta
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Aumento nos custos de insumos principais, especialmente proteínas.
                Necessária renegociação com fornecedores.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Faturamento superou expectativa
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Resultado das campanhas de marketing e aumento no ticket médio.
                Manter estratégias que estão performando bem.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Comparativo por Categoria</CardTitle>
          <CardDescription>Análise detalhada por categoria de produto</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Categoria</TableHead>
                <TableHead>Planejado</TableHead>
                <TableHead>Realizado</TableHead>
                <TableHead>Variação</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Pratos Principais</TableCell>
                <TableCell>R$ 72.000,00</TableCell>
                <TableCell>R$ 75.850,00</TableCell>
                <TableCell className="text-green-600">+5.3%</TableCell>
                <TableCell>
                  <Badge variant="success">Acima da meta</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bebidas</TableCell>
                <TableCell>R$ 30.000,00</TableCell>
                <TableCell>R$ 28.450,00</TableCell>
                <TableCell className="text-red-600">-5.2%</TableCell>
                <TableCell>
                  <Badge variant="destructive">Abaixo da meta</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sobremesas</TableCell>
                <TableCell>R$ 12.000,00</TableCell>
                <TableCell>R$ 12.250,00</TableCell>
                <TableCell className="text-green-600">+2.1%</TableCell>
                <TableCell>
                  <Badge variant="success">Meta atingida</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recomendações</CardTitle>
          <CardDescription>Ações sugeridas com base nas variações identificadas</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Indicador</TableHead>
                <TableHead>Desvio</TableHead>
                <TableHead>Ação Recomendada</TableHead>
                <TableHead>Prioridade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>CMV</TableCell>
                <TableCell>+1.2%</TableCell>
                <TableCell>Renegociar contratos com fornecedores principais</TableCell>
                <TableCell>
                  <Badge>Alta</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bebidas</TableCell>
                <TableCell>-5.2%</TableCell>
                <TableCell>Revisar mix de produtos e pricing</TableCell>
                <TableCell>
                  <Badge>Média</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Faturamento</TableCell>
                <TableCell>+4%</TableCell>
                <TableCell>Manter estratégias atuais de marketing</TableCell>
                <TableCell>
                  <Badge>Baixa</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}