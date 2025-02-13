// src/app/fichas-tecnicas/[id]/page.tsx
import Link from 'next/link'
import { ArrowLeft, FileEdit, Printer, MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function VisualizarFichaTecnica() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">Camarão Rosa Limpo</h1>
            <Badge className="bg-green-100 text-green-800">Ativo</Badge>
          </div>
          <p className="text-muted-foreground mt-1">Ficha técnica completa do produto</p>
        </div>
        <div className="flex gap-3">
          <Link href="/fichas-tecnicas">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Imprimir
          </Button>
          <Link href="/fichas-tecnicas/1/edit">
            <Button>
              <FileEdit className="mr-2 h-4 w-4" />
              Editar
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="text-destructive">
                Desativar Ficha
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Informações Gerais */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Informações Gerais</CardTitle>
            <CardDescription>Detalhes básicos do produto</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Categoria</p>
                <p className="text-sm font-medium">Proteínas/Frutos do Mar</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Data de Criação</p>
                <p className="text-sm font-medium">15/02/2024</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Descrição</p>
              <p className="text-sm">Camarão rosa limpo, sem cabeça, descascado e sem vísceras. Produto de alta qualidade, ideal para pratos principais.</p>
            </div>
          </CardContent>
        </Card>

        {/* Valores Nutricionais */}
        <Card>
          <CardHeader>
            <CardTitle>Valores Nutricionais</CardTitle>
            <CardDescription>Por porção de 100g</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between py-1 border-b">
                <span className="text-sm">Calorias</span>
                <span className="text-sm font-medium">250 kcal</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-sm">Proteínas</span>
                <span className="text-sm font-medium">25g</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-sm">Carboidratos</span>
                <span className="text-sm font-medium">0g</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-sm">Gorduras</span>
                <span className="text-sm font-medium">1.5g</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ingredientes */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Lista de Ingredientes</CardTitle>
            <CardDescription>Composição do produto</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ingrediente</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead>Unidade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Camarão Rosa</TableCell>
                  <TableCell>1000</TableCell>
                  <TableCell>g</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sal</TableCell>
                  <TableCell>20</TableCell>
                  <TableCell>g</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Fornecedores */}
        <Card>
          <CardHeader>
            <CardTitle>Fornecedores</CardTitle>
            <CardDescription>Associados ao produto</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-muted rounded-lg">
                <p className="font-medium">Frigorífico Mar Azul</p>
                <p className="text-sm text-muted-foreground">Prazo: 2 dias úteis</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="font-medium">Pescados do Sul</p>
                <p className="text-sm text-muted-foreground">Prazo: 3 dias úteis</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}