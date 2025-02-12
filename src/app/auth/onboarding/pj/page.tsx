// src/app/auth/onboarding/pj/page.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Square } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function BusinessOnboardingPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    averageRevenue: "",
    taxRegime: "",
    taxRate: "",
    averageTicket: "",
    dailyCustomers: "",
    establishmentName: "",
    cuisineType: "",
    address: "",
    zipCode: "",
    city: "",
    state: "",
    position: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = "/dashboard"
  }

  const formatCurrency = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, "")
    const number = parseInt(onlyNumbers)
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number / 100)
  }

  const formatZipCode = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <Card className="w-full max-w-2xl p-6">
        <CardHeader className="space-y-4 flex flex-col items-center">
          <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg">
            <Square className="w-8 h-8 text-primary-foreground" />
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Complete o cadastro da empresa
            </h1>
            <p className="text-sm text-muted-foreground">
              Precisamos de algumas informações adicionais sobre seu restaurante
            </p>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Informações Fiscais</h2>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Razão Social</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="averageRevenue">Faturamento Médio (12 meses)</Label>
                  <Input
                    id="averageRevenue"
                    value={formData.averageRevenue}
                    onChange={(e) => setFormData({ ...formData, averageRevenue: formatCurrency(e.target.value) })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxRegime">Regime Tributário</Label>
                  <Select
                    onValueChange={(value) => setFormData({ ...formData, taxRegime: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o regime" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="simples">Simples Nacional</SelectItem>
                      <SelectItem value="presumido">Lucro Presumido</SelectItem>
                      <SelectItem value="real">Lucro Real</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {formData.taxRegime === "real" && (
                  <div className="space-y-2">
                    <Label htmlFor="taxRate">Alíquota (%)</Label>
                    <Input
                      id="taxRate"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.taxRate}
                      onChange={(e) => setFormData({ ...formData, taxRate: e.target.value })}
                      required
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-medium">Informações do Estabelecimento</h2>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="establishmentName">Nome do Estabelecimento</Label>
                  <Input
                    id="establishmentName"
                    value={formData.establishmentName}
                    onChange={(e) => setFormData({ ...formData, establishmentName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cuisineType">Tipo de Culinária</Label>
                  <Select
                    onValueChange={(value) => setFormData({ ...formData, cuisineType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="italiana">Italiana</SelectItem>
                      <SelectItem value="japonesa">Japonesa</SelectItem>
                      <SelectItem value="brasileira">Brasileira</SelectItem>
                      <SelectItem value="francesa">Francesa</SelectItem>
                      <SelectItem value="mexicana">Mexicana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="averageTicket">Ticket Médio</Label>
                  <Input
                    id="averageTicket"
                    value={formData.averageTicket}
                    onChange={(e) => setFormData({ ...formData, averageTicket: formatCurrency(e.target.value) })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dailyCustomers">Quantidade de Clientes Diários</Label>
                  <Input
                    id="dailyCustomers"
                    type="number"
                    value={formData.dailyCustomers}
                    onChange={(e) => setFormData({ ...formData, dailyCustomers: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-medium">Endereço</h2>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Endereço Completo</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">CEP</Label>
                  <Input
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: formatZipCode(e.target.value) })}
                    placeholder="00000-000"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Cidade</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">Estado</Label>
                  <Select
                    onValueChange={(value) => setFormData({ ...formData, state: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="MG">Minas Gerais</SelectItem>
                      <SelectItem value="ES">Espírito Santo</SelectItem>
                      <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-medium">Cargo do Responsável</h2>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="position">Cargo</Label>
                <Select
                  onValueChange={(value) => setFormData({ ...formData, position: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="proprietario">Proprietário</SelectItem>
                    <SelectItem value="gerente">Gerente</SelectItem>
                    <SelectItem value="supervisor">Supervisor</SelectItem>
                    <SelectItem value="comprador">Comprador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" size="lg">
              Finalizar cadastro
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}