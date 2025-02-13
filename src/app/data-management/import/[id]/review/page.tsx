// src/app/data-management/import/[id]/review/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, CheckCircle, XCircle, FileSpreadsheet, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function ImportReviewPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/data-management/import/new">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Revisar Importação</h1>
          <p className="text-muted-foreground mt-1">
            Verifique e mapeie os dados antes de confirmar a importação
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5" />
                Mapeamento de Colunas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Coluna do Arquivo</TableHead>
                      <TableHead>Campo do Sistema</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { source: "Data", status: "success" },
                      { source: "Valor", status: "success" },
                      { source: "Categoria", status: "warning" },
                      { source: "Descrição", status: "error" },
                    ].map((row, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{row.source}</TableCell>
                        <TableCell>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o campo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="date">Data</SelectItem>
                              <SelectItem value="amount">Valor</SelectItem>
                              <SelectItem value="category">Categoria</SelectItem>
                              <SelectItem value="description">Descrição</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {row.status === "success" && (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                            {row.status === "warning" && (
                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                            )}
                            {row.status === "error" && (
                              <XCircle className="h-4 w-4 text-red-500" />
                            )}
                            <span className="text-sm text-muted-foreground">
                              {row.status === "success" && "Mapeado corretamente"}
                              {row.status === "warning" && "Requer atenção"}
                              {row.status === "error" && "Campo obrigatório"}
                            </span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prévia dos Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Descrição</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3].map((i) => (
                    <TableRow key={i}>
                      <TableCell>2024-02-{i}</TableCell>
                      <TableCell>R$ {1000 * i},00</TableCell>
                      <TableCell>Categoria {i}</TableCell>
                      <TableCell>Descrição do item {i}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3">
            <Button variant="outline" asChild>
              <Link href="/data-management/import/new">Voltar</Link>
            </Button>
            <Button>Confirmar Importação</Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resumo da Importação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Arquivo:</span>
                  <span className="font-medium">dados_financeiros.csv</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tipo:</span>
                  <span className="font-medium">Dados Financeiros</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Registros:</span>
                  <span className="font-medium">150 linhas</span>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <h3 className="font-semibold">Status da Validação</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>2 colunas mapeadas corretamente</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span>1 coluna requer atenção</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span>1 campo obrigatório faltando</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <AlertTriangle className="h-5 w-5" />
                <p>
                  Resolva todos os problemas identificados antes de confirmar a importação
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}