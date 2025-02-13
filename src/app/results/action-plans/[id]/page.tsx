// src/app/results/action-plans/[id]/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
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
  Target,
  CalendarDays,
  Users,
  CheckCircle2,
  Edit,
  Trash2
} from "lucide-react"

export default function ActionPlanDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="/results/action-plans">
              <ArrowLeft className="h-4 w-4" />
            </a>
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">Renegociação com Fornecedores</h1>
              <Badge variant="secondary">
                <Clock className="mr-1 h-3 w-3" />
                15 dias restantes
              </Badge>
            </div>
            <p className="text-muted-foreground">Plano de ação #PA-2024-001</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Excluir
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Objetivo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Reduzir o CMV em 0.5% através da renegociação de contratos com fornecedores
              principais, focando em insumos de alto volume.
            </p>
            <Separator className="my-4" />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progresso Geral</span>
                <span>65%</span>
              </div>
              <Progress value={65} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              Cronograma
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Início</span>
                <span>01/06/2024</span>
              </div>
              <div className="flex justify-between">
                <span>Previsão de Término</span>
                <span>30/06/2024</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Dias Restantes</span>
                <span>15 dias</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Responsáveis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Líder do Projeto</span>
                <span>Ana Silva</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Equipe</span>
                <span>Compras</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Etapas do Plano</CardTitle>
          <CardDescription>Acompanhamento das atividades planejadas</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Etapa</TableHead>
                <TableHead>Prazo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Resultado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Análise de Contratos Atuais</TableCell>
                <TableCell>05/06/2024</TableCell>
                <TableCell>
                  <Badge variant="success">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Concluído
                  </Badge>
                </TableCell>
                <TableCell>3 contratos identificados para revisão</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pesquisa de Mercado</TableCell>
                <TableCell>10/06/2024</TableCell>
                <TableCell>
                  <Badge variant="success">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Concluído
                  </Badge>
                </TableCell>
                <TableCell>5 novos fornecedores potenciais</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Negociação com Fornecedores</TableCell>
                <TableCell>20/06/2024</TableCell>
                <TableCell>
                  <Badge variant="secondary">
                    <Clock className="mr-1 h-3 w-3" />
                    Em andamento
                  </Badge>
                </TableCell>
                <TableCell>2 reuniões realizadas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fechamento de Novos Contratos</TableCell>
                <TableCell>30/06/2024</TableCell>
                <TableCell>
                  <Badge variant="secondary">
                    <Clock className="mr-1 h-3 w-3" />
                    Pendente
                  </Badge>
                </TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Impacto Esperado</CardTitle>
          <CardDescription>Projeção dos resultados após implementação</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="font-medium">CMV Atual</h3>
              <div className="text-2xl font-bold">31.5%</div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">CMV Projetado</h3>
              <div className="text-2xl font-bold text-green-600">31.0%</div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Economia Mensal</h3>
              <div className="text-2xl font-bold text-green-600">R$ 6.237,50</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}