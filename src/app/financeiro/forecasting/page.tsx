import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  BarChart2, 
  Download, 
  TrendingUp,
  AlertCircle,
  ArrowUpRight,
  ArrowRight,
  ArrowDownRight
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Forecasting() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Forecasting de Crescimento</h1>
          <p className="text-muted-foreground mt-1">
            Projeções baseadas em 6 meses de dados históricos
          </p>
        </div>
        
        <div className="flex gap-4">
          <Select defaultValue="6meses">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período de projeção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3meses">Próximos 3 meses</SelectItem>
              <SelectItem value="6meses">Próximos 6 meses</SelectItem>
              <SelectItem value="12meses">Próximos 12 meses</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar Projeções
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Crescimento de Faturamento
            </CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">+15.8%</div>
              <Badge variant="secondary">Realista</Badge>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center text-green-500">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +22.3% Otimista
              </div>
              <div className="flex items-center text-yellow-500">
                <ArrowDownRight className="mr-1 h-4 w-4" />
                +8.5% Pessimista
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              CMV Ideal Projetado
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">29.5%</div>
              <Badge variant="secondary">Meta</Badge>
            </div>
            <div className="mt-2 flex items-center text-sm text-muted-foreground">
              <ArrowRight className="mr-1 h-4 w-4" />
              Redução de 1.9% necessária
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Lucro Previsto
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">R$ 58.450,00</div>
              <Badge variant="secondary">Mensal</Badge>
            </div>
            <div className="mt-2 text-sm text-green-500">
              +29.2% vs média atual
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Projeções Detalhadas</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Indicador</TableHead>
                <TableHead>Cenário Pessimista</TableHead>
                <TableHead>Cenário Realista</TableHead>
                <TableHead>Cenário Otimista</TableHead>
                <TableHead>Ações Recomendadas</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Faturamento</TableCell>
                <TableCell>R$ 205.000,00</TableCell>
                <TableCell>R$ 225.000,00</TableCell>
                <TableCell>R$ 245.000,00</TableCell>
                <TableCell>Intensificar marketing digital</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ticket Médio</TableCell>
                <TableCell>R$ 85,00</TableCell>
                <TableCell>R$ 92,00</TableCell>
                <TableCell>R$ 98,00</TableCell>
                <TableCell>Desenvolver menu premium</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Clientes/Mês</TableCell>
                <TableCell>2.410</TableCell>
                <TableCell>2.445</TableCell>
                <TableCell>2.500</TableCell>
                <TableCell>Programa de fidelidade</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Análise de Tendências</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Categoria</TableHead>
                <TableHead>Tendência</TableHead>
                <TableHead>Impacto Previsto</TableHead>
                <TableHead>Oportunidades</TableHead>
                <TableHead>Riscos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Pratos Principais</TableCell>
                <TableCell className="text-green-500">Crescimento</TableCell>
                <TableCell>+18.5%</TableCell>
                <TableCell>Expansão do menu executivo</TableCell>
                <TableCell>Aumento custos insumos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bebidas</TableCell>
                <TableCell className="text-yellow-500">Estável</TableCell>
                <TableCell>+5.2%</TableCell>
                <TableCell>Carta de vinhos premium</TableCell>
                <TableCell>Concorrência delivery</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sobremesas</TableCell>
                <TableCell className="text-green-500">Crescimento</TableCell>
                <TableCell>+22.3%</TableCell>
                <TableCell>Menu sobremesas especiais</TableCell>
                <TableCell>Sazonalidade</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}