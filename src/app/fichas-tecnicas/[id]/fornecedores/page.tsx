// src/app/fichas-tecnicas/[id]/fornecedores/page.tsx
import Link from 'next/link'
import { ArrowLeft, Plus, Phone, Mail, MapPin, ArrowUpDown, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FornecedoresFichaTecnica() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">Fornecedores</h1>
            <Badge>12 ativos</Badge>
          </div>
          <p className="text-muted-foreground mt-1">Fornecedores vinculados ao Camarão Rosa Limpo</p>
        </div>
        <div className="flex gap-3">
          <Link href="/fichas-tecnicas/1">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <Link href="/fichas-tecnicas/1/fornecedores/vincular">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Vincular Fornecedor
          </Button>
            </Link>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input placeholder="Buscar por nome, CNPJ..." />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ativo">Ativo</SelectItem>
                <SelectItem value="inativo">Inativo</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Região" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sul">Sul</SelectItem>
                <SelectItem value="sudeste">Sudeste</SelectItem>
                <SelectItem value="centro">Centro-Oeste</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Fornecedores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <CardTitle>Frigorífico Mar Azul</CardTitle>
                <CardDescription>CNPJ: 12.345.678/0001-90</CardDescription>
              </div>
              <Badge className="bg-green-100 text-green-800">Ativo</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">contato@marazul.com</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">São Paulo, SP</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Condições comerciais:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Prazo de Entrega</p>
                    <p>2 dias úteis</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Pedido Mínimo</p>
                    <p>R$ 1.000,00</p>
                  </div>
                </div>
              </div>
              <Link href="/fichas-tecnicas/1/fornecedores/1/historico">
              <Button variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Histórico
              </Button>
                </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <CardTitle>Pescados do Sul</CardTitle>
                <CardDescription>CNPJ: 98.765.432/0001-10</CardDescription>
              </div>
              <Badge className="bg-green-100 text-green-800">Ativo</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">(51) 98888-8888</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">vendas@pescadosdosul.com</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Porto Alegre, RS</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Condições comerciais:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Prazo de Entrega</p>
                    <p>3 dias úteis</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Pedido Mínimo</p>
                    <p>R$ 800,00</p>
                  </div>
                </div>
              </div>
              <Link href="/fichas-tecnicas/1/fornecedores/2/historico">
              <Button variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Histórico
              </Button>
                </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}