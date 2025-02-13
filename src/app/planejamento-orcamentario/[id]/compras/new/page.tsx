// src/app/planejamento-orcamentario/[id]/compras/new/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ArrowLeft,
  Save,
} from "lucide-react"

export default function NovaCompraPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/planejamento-orcamentario/1/compras">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nova Compra</h1>
          <p className="text-muted-foreground mt-2">
            Registre uma nova compra categorizada
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="produto">Descrição do Produto</Label>
              <Input id="produto" placeholder="Ex: Camarão Rosa" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="categoria">Categoria</Label>
              <Select>
                <SelectTrigger id="categoria">
                  <SelectValue placeholder="Selecione a categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="proteina">Proteína Animal</SelectItem>
                  <SelectItem value="graos">Grãos e Cereais</SelectItem>
                  <SelectItem value="laticinios">Laticínios</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subcategoria">Subcategoria</Label>
              <Select>
                <SelectTrigger id="subcategoria">
                  <SelectValue placeholder="Selecione a subcategoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="carnes">Carnes Nobres</SelectItem>
                  <SelectItem value="massas">Massas Artesanais</SelectItem>
                  <SelectItem value="queijos">Queijos Especiais</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantidade">Quantidade</Label>
              <Input id="quantidade" type="number" placeholder="0" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="unidade">Unidade de Medida</Label>
              <Select>
                <SelectTrigger id="unidade">
                  <SelectValue placeholder="Selecione a unidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">Quilograma (kg)</SelectItem>
                  <SelectItem value="l">Litro (L)</SelectItem>
                  <SelectItem value="un">Unidade (un)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="valor">Valor Unitário</Label>
              <Input id="valor" type="number" placeholder="R$ 0,00" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="data">Data da Compra</Label>
              <Input id="data" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="total">Valor Total</Label>
              <Input id="total" type="number" placeholder="R$ 0,00" disabled />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4 mt-8">
        <Link href="/planejamento-orcamentario/1/compras">
          <Button variant="outline">Cancelar</Button>
        </Link>
        <Button className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Salvar Compra
        </Button>
      </div>
    </div>
  )
}