// src/app/data-management/export/new/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, FileText, Settings } from "lucide-react"
import Link from "next/link"

export default function NewExportPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/data-management">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nova Exportação</h1>
          <p className="text-muted-foreground mt-1">
            Configure e gere sua exportação de dados
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Tabs defaultValue="basic" className="space-y-4">
            <TabsList>
              <TabsTrigger value="basic">Configuração Básica</TabsTrigger>
              <TabsTrigger value="advanced">Configuração Avançada</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações do Relatório</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="report-type">Tipo de Relatório</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de relatório" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="financial">Relatório Financeiro</SelectItem>
                        <SelectItem value="inventory">Relatório de Estoque</SelectItem>
                        <SelectItem value="performance">Desempenho Operacional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Período</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="start-date">Data Inicial</Label>
                        <Input type="date" id="start-date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="end-date">Data Final</Label>
                        <Input type="date" id="end-date" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Formato de Exportação</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Input type="radio" id="format-csv" name="format" />
                        <Label htmlFor="format-csv">CSV</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input type="radio" id="format-pdf" name="format" />
                        <Label htmlFor="format-pdf">PDF</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Filtros Avançados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Categorias</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione as categorias" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas</SelectItem>
                        <SelectItem value="food">Alimentos</SelectItem>
                        <SelectItem value="beverage">Bebidas</SelectItem>
                        <SelectItem value="supplies">Suprimentos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Agrupamento</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o agrupamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Sem agrupamento</SelectItem>
                        <SelectItem value="daily">Diário</SelectItem>
                        <SelectItem value="weekly">Semanal</SelectItem>
                        <SelectItem value="monthly">Mensal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Campos Incluídos</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Input type="checkbox" id="field-date" />
                        <Label htmlFor="field-date">Data</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input type="checkbox" id="field-value" />
                        <Label htmlFor="field-value">Valor</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input type="checkbox" id="field-category" />
                        <Label htmlFor="field-category">Categoria</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input type="checkbox" id="field-description" />
                        <Label htmlFor="field-description">Descrição</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" asChild>
              <Link href="/data-management/export">Cancelar</Link>
            </Button>
            <Button>Gerar Exportação</Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Guia de Exportação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Dicas:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <FileText className="h-4 w-4 flex-shrink-0" />
                    Selecione o período adequado para seus dados
                  </li>
                  <li className="flex gap-2">
                    <FileText className="h-4 w-4 flex-shrink-0" />
                    CSV é melhor para análises em planilhas
                  </li>
                  <li className="flex gap-2">
                    <FileText className="h-4 w-4 flex-shrink-0" />
                    PDF é ideal para apresentações e relatórios
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Formatos Disponíveis:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Download className="h-4 w-4" />
                    <span>CSV - Para análise de dados</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Download className="h-4 w-4" />
                    <span>PDF - Para visualização e impressão</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <FileText className="h-5 w-5" />
                <p>
                  Precisa de ajuda? Consulte nossa{" "}
                  <Link href="#" className="text-primary hover:underline">
                    documentação de exportação
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}