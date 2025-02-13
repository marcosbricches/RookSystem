// src/app/results/[period]/details/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  ArrowUpRight, 
  ArrowDownRight,
  ArrowLeft,
  Download
} from "lucide-react"

export default function PeriodDetailsPage({ params }: { params: { period: string } }) {
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
            <h1 className="text-3xl font-bold tracking-tight">Análise Detalhada</h1>
            <p className="text-muted-foreground">Junho 2024</p>
          </div>
        </div>

        <Button>
          <Download className="mr-2 h-4 w-4" />
          Exportar Relatório
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Desempenho por Categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Faturamento</TableHead>
                  <TableHead>CMV</TableHead>
                  <TableHead>Margem</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Pratos Principais</TableCell>
                  <TableCell>R$ 75.850,00</TableCell>
                  <TableCell>33.5%</TableCell>
                  <TableCell className="flex items-center gap-2">
                    45.2%
                    <Badge variant="success" className="flex items-center gap-1">
                      <ArrowUpRight className="h-3 w-3" />
                      2.1%
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bebidas</TableCell>
                  <TableCell>R$ 28.450,00</TableCell>
                  <TableCell>28.4%</TableCell>
                  <TableCell className="flex items-center gap-2">
                    52.8%
                    <Badge variant="success" className="flex items-center gap-1">
                      <ArrowUpRight className="h-3 w-3" />
                      1.5%
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sobremesas</TableCell>
                  <TableCell>R$ 12.250,00</TableCell>
                  <TableCell>31.2%</TableCell>
                  <TableCell className="flex items-center gap-2">
                    42.5%
                    <Badge variant="destructive" className="flex items-center gap-1">
                      <ArrowDownRight className="h-3 w-3" />
                      1.2%
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comparativo Planejado vs Realizado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Faturamento</span>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Meta: R$ 120.000,00</span>
                  <Badge variant="success">104%</Badge>
                </div>
              </div>
              <Progress value={104} className="h-3" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>CMV</span>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Meta: 30%</span>
                  <Badge>31.2%</Badge>
                </div>
              </div>
              <Progress value={96} className="h-3" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Lucro Operacional</span>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Meta: R$ 42.000,00</span>
                  <Badge variant="success">107%</Badge>
                </div>
              </div>
              <Progress value={107} className="h-3" />
            </div>

            <Separator />

            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-medium">Análise do Período</h4>
              <p className="text-sm text-muted-foreground">
                O mês de Junho superou as expectativas em faturamento e lucro operacional, 
                com destaque para o desempenho da categoria de Bebidas. O CMV ficou 
                levemente acima da meta, principalmente devido ao aumento nos custos 
                dos pratos principais.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}