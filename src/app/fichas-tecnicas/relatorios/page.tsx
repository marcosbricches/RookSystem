// src/app/fichas-tecnicas/relatorios/page.tsx
import Link from 'next/link'
import { ArrowLeft, Download, Filter, LineChart, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function RelatoriosFichasTecnicas() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Relatórios de Fichas Técnicas</h1>
          <p className="text-muted-foreground">Análise consolidada das fichas técnicas</p>
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
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="pl-9" placeholder="Buscar fichas técnicas..." />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="proteinas">Proteínas</SelectItem>
                <SelectItem value="graos">Grãos</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ativo">Ativo</SelectItem>
                <SelectItem value="inativo">Inativo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Dashboard */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Fichas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Fichas Ativas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Categorias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Fornecedores Vinculados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
          </CardContent>
        </Card>
      </div>

      {/* Relatórios Detalhados */}
      <Tabs defaultValue="geral">
        <TabsList>
          <TabsTrigger value="geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="categorias">Por Categoria</TabsTrigger>
          <TabsTrigger value="custos">Análise de Custos</TabsTrigger>
        </TabsList>

        <TabsContent value="geral" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fichas Técnicas Recentes</CardTitle>
              <CardDescription>Últimas fichas técnicas atualizadas</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Última Atualização</TableHead>
                    <TableHead>Fornecedores</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Camarão Rosa Limpo</TableCell>
                    <TableCell>Proteínas</TableCell>
                    <TableCell>13/02/2025</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Arroz Branco</TableCell>
                    <TableCell>Grãos</TableCell>
                    <TableCell>12/02/2025</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Ativo</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categorias">
          <Card>
            <CardHeader>
              <CardTitle>Distribuição por Categoria</CardTitle>
              <CardDescription>Quantidade de fichas técnicas por categoria</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Quantidade</TableHead>
                    <TableHead>Fornecedores</TableHead>
                    <TableHead>Custo Médio</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Proteínas</TableCell>
                    <TableCell>45</TableCell>
                    <TableCell>15</TableCell>
                    <TableCell>R$ 45,00/kg</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Grãos</TableCell>
                    <TableCell>32</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>R$ 8,50/kg</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custos">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Custos</CardTitle>
              <CardDescription>Comparativo de custos por categoria</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Custo Mínimo</TableHead>
                    <TableHead>Custo Médio</TableHead>
                    <TableHead>Custo Máximo</TableHead>
                    <TableHead>Variação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Proteínas</TableCell>
                    <TableCell>R$ 35,00/kg</TableCell>
                    <TableCell>R$ 45,00/kg</TableCell>
                    <TableCell>R$ 55,00/kg</TableCell>
                    <TableCell>+12%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Grãos</TableCell>
                    <TableCell>R$ 6,50/kg</TableCell>
                    <TableCell>R$ 8,50/kg</TableCell>
                    <TableCell>R$ 10,50/kg</TableCell>
                    <TableCell>+8%</TableCell>
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