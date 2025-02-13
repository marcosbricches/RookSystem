// src/app/data-management/export/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, FileText, Search, Filter } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function ExportHistoryPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/data-management">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">Histórico de Exportações</h1>
          <p className="text-muted-foreground mt-1">
            Visualize e baixe suas exportações anteriores
          </p>
        </div>
        <Button asChild>
          <Link href="/data-management/export/new">
            Nova Exportação
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtros e Busca</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar por nome do relatório..." className="pl-8" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tipo de Relatório" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="financial">Relatório Financeiro</SelectItem>
                <SelectItem value="inventory">Relatório de Estoque</SelectItem>
                <SelectItem value="performance">Desempenho Operacional</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Formato" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Relatório</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Período</TableHead>
                <TableHead>Formato</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "Relatório Financeiro - Janeiro 2024",
                  type: "Relatório Financeiro",
                  period: "01/01/2024 - 31/01/2024",
                  format: "PDF",
                  date: "13/02/2024"
                },
                {
                  name: "Estoque - Fevereiro 2024",
                  type: "Relatório de Estoque",
                  period: "01/02/2024 - 13/02/2024",
                  format: "CSV",
                  date: "13/02/2024"
                },
                {
                  name: "Desempenho - Q1 2024",
                  type: "Desempenho Operacional",
                  period: "01/01/2024 - 31/03/2024",
                  format: "PDF",
                  date: "12/02/2024"
                }
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{row.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.period}</TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {row.format}
                    </Badge>
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Baixar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <Link href={`/data-management/export/${i}`}>
                          Detalhes
                        </Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <FileText className="h-5 w-5" />
              <p>Mostrando os últimos 30 dias de exportações</p>
            </div>
            <Button variant="link" size="sm">
              Ver todas as exportações
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}