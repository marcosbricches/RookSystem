// src/app/results/action-plans/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
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
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  ChevronRight
} from "lucide-react"

export default function ActionPlansPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Planos de Ação</h1>
            <p className="text-muted-foreground">Acompanhamento de melhorias</p>
          </div>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Plano de Ação
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Em Andamento
              <Badge variant="secondary">4</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">
                    <Clock className="mr-1 h-3 w-3" />
                    15 dias restantes
                  </Badge>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-base">Renegociação com Fornecedores</CardTitle>
                <CardDescription>Redução prevista de 0.5% no CMV</CardDescription>
              </CardHeader>
            </Card>

            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">
                    <Clock className="mr-1 h-3 w-3" />
                    7 dias restantes
                  </Badge>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-base">Programa de Fidelidade</CardTitle>
                <CardDescription>Aumento previsto de 10% no ticket médio</CardDescription>
              </CardHeader>
            </Card>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Concluídos
              <Badge variant="success">8</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="success">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Concluído
                  </Badge>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-base">Otimização do Cardápio</CardTitle>
                <CardDescription>Aumento de 2.5% na margem</CardDescription>
              </CardHeader>
            </Card>

            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="success">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Concluído
                  </Badge>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-base">Controle de Porções</CardTitle>
                <CardDescription>Redução de 1.2% no CMV</CardDescription>
              </CardHeader>
            </Card>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Atrasados
              <Badge variant="destructive">2</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="cursor-pointer hover:bg-muted/50">
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="destructive">
                    <AlertCircle className="mr-1 h-3 w-3" />
                    5 dias de atraso
                  </Badge>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-base">Treinamento de Equipe</CardTitle>
                <CardDescription>Redução de desperdício na operação</CardDescription>
              </CardHeader>
            </Card>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resultados dos Planos de Ação</CardTitle>
          <CardDescription>
            Impacto das melhorias implementadas nos últimos 3 meses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plano de Ação</TableHead>
                <TableHead>Impacto Previsto</TableHead>
                <TableHead>Resultado Alcançado</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Otimização do Cardápio</TableCell>
                <TableCell>+2.0% margem</TableCell>
                <TableCell>+2.5% margem</TableCell>
                <TableCell>
                  <Badge variant="success">Superou meta</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Controle de Porções</TableCell>
                <TableCell>-1.0% CMV</TableCell>
                <TableCell>-1.2% CMV</TableCell>
                <TableCell>
                  <Badge variant="success">Superou meta</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Campanha Marketing</TableCell>
                <TableCell>+15% vendas</TableCell>
                <TableCell>+12% vendas</TableCell>
                <TableCell>
                  <Badge variant="secondary">Parcial</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}