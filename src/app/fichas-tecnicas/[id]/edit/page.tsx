// src/app/fichas-tecnicas/[id]/edit/page.tsx
import Link from 'next/link'
import { ArrowLeft, Save, Plus, Trash2, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function EditarFichaTecnica() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Editar Ficha Técnica</h1>
          <p className="text-muted-foreground">Atualize as informações da ficha técnica do produto</p>
        </div>
        <div className="flex gap-3">
          <Link href="/fichas-tecnicas/1">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Cancelar
            </Button>
          </Link>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Salvar Alterações
          </Button>
        </div>
      </div>

      {/* Alerta de Modificação */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Todas as alterações afetarão os cálculos de custos e relatórios relacionados.
        </AlertDescription>
      </Alert>

      {/* Informações Básicas */}
      <Card>
        <CardHeader>
          <CardTitle>Informações Básicas</CardTitle>
          <CardDescription>Dados principais do produto</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Nome do Produto</Label>
              <Input defaultValue="Camarão Rosa Limpo" />
            </div>
            <div className="space-y-2">
              <Label>Categoria</Label>
              <Select defaultValue="proteinas">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="proteinas">Proteínas</SelectItem>
                  <SelectItem value="graos">Grãos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Descrição</Label>
            <Textarea 
              defaultValue="Camarão rosa limpo, sem cabeça, descascado e sem vísceras. Produto de alta qualidade, ideal para pratos principais."
            />
          </div>
        </CardContent>
      </Card>

      {/* Valores Nutricionais */}
      <Card>
        <CardHeader>
          <CardTitle>Valores Nutricionais</CardTitle>
          <CardDescription>Informações nutricionais por porção</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Porção (g)</Label>
              <Input type="number" defaultValue="100" />
            </div>
            <div className="space-y-2">
              <Label>Calorias (kcal)</Label>
              <Input type="number" defaultValue="250" />
            </div>
            <div className="space-y-2">
              <Label>Proteínas (g)</Label>
              <Input type="number" defaultValue="25" />
            </div>
            <div className="space-y-2">
              <Label>Gorduras (g)</Label>
              <Input type="number" defaultValue="1.5" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ingredientes */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Ingredientes</CardTitle>
              <CardDescription>Lista de ingredientes necessários</CardDescription>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Adicionar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ingrediente</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Unidade</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Input defaultValue="Camarão Rosa" />
                </TableCell>
                <TableCell>
                  <Input type="number" defaultValue="1000" />
                </TableCell>
                <TableCell>
                  <Select defaultValue="g">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="g">g</SelectItem>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="ml">ml</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="w-[50px]">
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Input defaultValue="Sal" />
                </TableCell>
                <TableCell>
                  <Input type="number" defaultValue="20" />
                </TableCell>
                <TableCell>
                  <Select defaultValue="g">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="g">g</SelectItem>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="ml">ml</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="w-[50px]">
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}