import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { AlertCircle, Download, TrendingDown, TrendingUp } from "lucide-react"

export default function ResultadosFinanceiros() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Resultados Financeiros</h1>
        
        <div className="flex gap-4">
          <Select defaultValue="mensal">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione o período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mensal">Mensal</SelectItem>
              <SelectItem value="trimestral">Trimestral</SelectItem>
              <SelectItem value="anual">Anual</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CMV (%)</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">31.4%</div>
            <div className="flex items-center text-sm text-red-500">
              <TrendingUp className="mr-1 h-4 w-4" />
              +2.1% em relação ao planejado
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Margem de Contribuição</CardTitle>
            <AlertCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68.6%</div>
            <div className="flex items-center text-sm text-green-500">
              <TrendingUp className="mr-1 h-4 w-4" />
              +1.2% em relação ao planejado
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lucro Operacional</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 45.230,00</div>
            <div className="flex items-center text-sm text-red-500">
              <TrendingDown className="mr-1 h-4 w-4" />
              -5.8% em relação ao planejado
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="indicadores" className="space-y-4">
        <TabsList>
          <TabsTrigger value="indicadores">Indicadores Detalhados</TabsTrigger>
          <TabsTrigger value="comparativo">Comparativo Planejado/Realizado</TabsTrigger>
        </TabsList>

        <TabsContent value="indicadores" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Desempenho por Categoria</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Categoria</TableHead>
                    <TableHead>CMV (%)</TableHead>
                    <TableHead>Margem (%)</TableHead>
                    <TableHead>Lucro (R$)</TableHead>
                    <TableHead>Variação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Pratos Principais</TableCell>
                    <TableCell>28.5%</TableCell>
                    <TableCell>71.5%</TableCell>
                    <TableCell>25.430,00</TableCell>
                    <TableCell className="text-green-500">+2.3%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bebidas</TableCell>
                    <TableCell>35.2%</TableCell>
                    <TableCell>64.8%</TableCell>
                    <TableCell>12.350,00</TableCell>
                    <TableCell className="text-red-500">-1.8%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sobremesas</TableCell>
                    <TableCell>30.1%</TableCell>
                    <TableCell>69.9%</TableCell>
                    <TableCell>7.450,00</TableCell>
                    <TableCell className="text-green-500">+3.5%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Despesas Operacionais</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tipo de Despesa</TableHead>
                    <TableHead>Valor (R$)</TableHead>
                    <TableHead>% da Receita</TableHead>
                    <TableHead>Variação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Folha de Pagamento</TableCell>
                    <TableCell>28.500,00</TableCell>
                    <TableCell>15.2%</TableCell>
                    <TableCell className="text-red-500">+2.1%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Aluguel</TableCell>
                    <TableCell>12.000,00</TableCell>
                    <TableCell>6.4%</TableCell>
                    <TableCell className="text-gray-500">0%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Marketing</TableCell>
                    <TableCell>5.230,00</TableCell>
                    <TableCell>2.8%</TableCell>
                    <TableCell className="text-green-500">-1.2%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparativo">
          <Card>
            <CardHeader>
              <CardTitle>Comparativo Planejado vs Realizado</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Indicador</TableHead>
                    <TableHead>Planejado</TableHead>
                    <TableHead>Realizado</TableHead>
                    <TableHead>Diferença</TableHead>
                    <TableHead>Variação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Faturamento</TableCell>
                    <TableCell>185.000,00</TableCell>
                    <TableCell>187.500,00</TableCell>
                    <TableCell>+2.500,00</TableCell>
                    <TableCell className="text-green-500">+1.4%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>CMV</TableCell>
                    <TableCell>29.3%</TableCell>
                    <TableCell>31.4%</TableCell>
                    <TableCell>+2.1%</TableCell>
                    <TableCell className="text-red-500">+7.2%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lucro Operacional</TableCell>
                    <TableCell>48.000,00</TableCell>
                    <TableCell>45.230,00</TableCell>
                    <TableCell>-2.770,00</TableCell>
                    <TableCell className="text-red-500">-5.8%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}