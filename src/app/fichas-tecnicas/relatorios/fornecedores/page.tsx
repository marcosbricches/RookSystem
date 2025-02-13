// src/app/fichas-tecnicas/relatorios/fornecedores/page.tsx
import Link from 'next/link'
import { ArrowLeft, Download, FileText, Filter, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RelatoriosFornecedores() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Relatórios de Fornecedores</h1>
          <p className="text-muted-foreground">Análise detalhada do desempenho dos fornecedores</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Link href="/fichas-tecnicas">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Últimos 7 dias</SelectItem>
                <SelectItem value="30d">Últimos 30 dias</SelectItem>
                <SelectItem value="90d">Últimos 90 dias</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="proteinas">Proteínas</SelectItem>
                <SelectItem value="graos">Grãos</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Mais Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Relatórios */}
      <Tabs defaultValue="desempenho">
        <TabsList>
          <TabsTrigger value="desempenho">Desempenho</TabsTrigger>
          <TabsTrigger value="produtos">Produtos</TabsTrigger>
          <TabsTrigger value="pagamentos">Pagamentos</TabsTrigger>
        </TabsList>

        {/* Desempenho */}
        <TabsContent value="desempenho" className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Fornecedores Ativos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">48</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Prazo Médio de Entrega
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4 dias</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Taxa de Pontualidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">95%</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ranking de Fornecedores</CardTitle>
              <CardDescription>Por volume de entregas no período</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fornecedor</TableHead>
                    <TableHead>Entregas</TableHead>
                    <TableHead>Valor Total</TableHead>
                    <TableHead>Pontualidade</TableHead>
                    <TableHead>Prazo Médio</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Frigorífico Mar Azul</TableCell>
                    <TableCell>48</TableCell>
                    <TableCell>R$ 157.892,00</TableCell>
                    <TableCell>95%</TableCell>
                    <TableCell>2.4 dias</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Pescados do Sul</TableCell>
                    <TableCell>35</TableCell>
                    <TableCell>R$ 98.450,00</TableCell>
                    <TableCell>92%</TableCell>
                    <TableCell>2.8 dias</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Produtos */}
        <TabsContent value="produtos">
          <Card>
            <CardHeader>
              <CardTitle>Produtos por Fornecedor</CardTitle>
              <CardDescription>Detalhamento de produtos fornecidos</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fornecedor</TableHead>
                    <TableHead>Produtos</TableHead>
                    <TableHead>Categorias</TableHead>
                    <TableHead>Último Fornecimento</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Frigorífico Mar Azul</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>Proteínas, Frutos do Mar</TableCell>
                    <TableCell>13/02/2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Pescados do Sul</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>Proteínas, Frutos do Mar</TableCell>
                    <TableCell>12/02/2025</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pagamentos */}
        <TabsContent value="pagamentos">
          <Card>
            <CardHeader>
              <CardTitle>Condições de Pagamento</CardTitle>
              <CardDescription>Análise das condições comerciais</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fornecedor</TableHead>
                    <TableHead>Prazo</TableHead>
                    <TableHead>Pedido Mínimo</TableHead>
                    <TableHead>Forma de Pagamento</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Frigorífico Mar Azul</TableCell>
                    <TableCell>28 dias</TableCell>
                    <TableCell>R$ 1.000,00</TableCell>
                    <TableCell>Boleto</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Pescados do Sul</TableCell>
                    <TableCell>30 dias</TableCell>
                    <TableCell>R$ 800,00</TableCell>
                    <TableCell>Boleto, PIX</TableCell>
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