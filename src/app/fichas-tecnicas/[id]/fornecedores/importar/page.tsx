// src/app/fichas-tecnicas/fornecedores/importar/page.tsx
import Link from 'next/link'
import { ArrowLeft, Upload, FileSpreadsheet, Download, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ImportarFornecedores() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Importar Fornecedores</h1>
          <p className="text-muted-foreground">Importe fornecedores em lote através de planilha</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Baixar Modelo
          </Button>
          <Link href="/fichas-tecnicas/fornecedores">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>
      </div>

      {/* Área de Upload */}
      <Card>
        <CardHeader>
          <CardTitle>Upload de Arquivo</CardTitle>
          <CardDescription>
            Arraste ou selecione o arquivo Excel/CSV com os dados dos fornecedores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed rounded-lg p-8 text-center space-y-4">
            <div className="flex flex-col items-center gap-2">
              <FileSpreadsheet className="h-12 w-12 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Arraste e solte seu arquivo aqui, ou
              </p>
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Selecionar Arquivo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerta de Validação */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Os dados serão validados antes da importação. Fornecedores com CNPJ duplicado serão atualizados.
        </AlertDescription>
      </Alert>

      {/* Preview dos Dados */}
      <Card>
        <CardHeader>
          <CardTitle>Preview da Importação</CardTitle>
          <CardDescription>Validação prévia dos dados a serem importados</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>CNPJ</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>11.222.333/0001-44</TableCell>
                <TableCell>Distribuidora Oceânica</TableCell>
                <TableCell>contato@oceanica.com</TableCell>
                <TableCell>(48) 99999-9999</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">
                    Válido
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>55.666.777/0001-88</TableCell>
                <TableCell>Frutos do Mar Express</TableCell>
                <TableCell>contato@frutosmar.com</TableCell>
                <TableCell>(13) 98888-8888</TableCell>
                <TableCell>
                  <Badge className="bg-yellow-100 text-yellow-800">
                    CNPJ Duplicado
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>99.888.777/0001-66</TableCell>
                <TableCell>Pescados Sul</TableCell>
                <TableCell>invalido@email</TableCell>
                <TableCell>(51) 97777-7777</TableCell>
                <TableCell>
                  <Badge className="bg-red-100 text-red-800">
                    E-mail Inválido
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Ações */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancelar</Button>
        <Button>Confirmar Importação</Button>
      </div>
    </div>
  )
}