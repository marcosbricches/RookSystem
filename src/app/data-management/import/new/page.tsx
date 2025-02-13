// src/app/data-management/import/new/page.tsx
'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, ArrowLeft, AlertCircle, FileText } from "lucide-react"
import Link from "next/link"

export default function NewImportPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/data-management">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nova Importação</h1>
          <p className="text-muted-foreground mt-1">
            Configure e carregue seus dados para importação
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Configuração da Importação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="import-type">Tipo de Dado</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de dado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financial">Dados Financeiros</SelectItem>
                    <SelectItem value="inventory">Compras e Estoque</SelectItem>
                    <SelectItem value="employees">Funcionários e Folha</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Arquivo</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center space-y-4">
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Arraste seu arquivo aqui</p>
                      <p className="text-sm text-muted-foreground">
                        ou clique para selecionar
                      </p>
                    </div>
                  </div>
                  <Input
                    type="file"
                    className="hidden"
                    accept=".csv,.xls,.xlsx"
                    id="file-upload"
                  />
                  <Button variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
                    Selecionar Arquivo
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Formatos aceitos: CSV, XLS, XLSX
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" asChild>
                <Link href="/data-management">Cancelar</Link>
              </Button>
              <Link href="/data-management/import/1/review">
              <Button>Prosseguir</Button>
                </Link>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Guia de Importação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Antes de começar:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <FileText className="h-4 w-4 flex-shrink-0" />
                    Verifique se seu arquivo está em um dos formatos suportados
                  </li>
                  <li className="flex gap-2">
                    <FileText className="h-4 w-4 flex-shrink-0" />
                    Certifique-se que os dados estão organizados corretamente
                  </li>
                  <li className="flex gap-2">
                    <FileText className="h-4 w-4 flex-shrink-0" />
                    Confira se todas as colunas obrigatórias estão presentes
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Próximos passos:</h3>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Selecione o tipo de dado a ser importado</li>
                  <li>Faça upload do seu arquivo</li>
                  <li>Revise o mapeamento das colunas</li>
                  <li>Confirme a importação</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <AlertCircle className="h-5 w-5" />
                <p>
                  Precisa de ajuda? Consulte nossa{" "}
                  <Link href="#" className="text-primary hover:underline">
                    documentação de importação
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