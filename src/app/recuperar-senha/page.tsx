// app/recuperar-senha/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, ArrowLeft, Building2, KeyRound, Check } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export default function RecuperarSenhaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Logo e título */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Building2 className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Recuperação de Senha
          </h1>
          <p className="mt-2 text-gray-600">
            Digite seu e-mail para receber as instruções
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Redefinir senha</CardTitle>
            <CardDescription>
              Enviaremos um link para você criar uma nova senha
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              {/* Mensagem de sucesso (exemplo) */}
              <Alert className="hidden bg-green-50 text-green-700 border-green-200">
                <Check className="h-4 w-4" />
                <AlertDescription>
                  Link de recuperação enviado! Verifique seu e-mail.
                </AlertDescription>
              </Alert>

              {/* Campo de e-mail */}
              <div className="space-y-2">
                <Label htmlFor="email">E-mail cadastrado</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input 
                    id="email"
                    type="email"
                    placeholder="exemplo@email.com"
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Campos de nova senha (inicialmente ocultos) */}
              <div className="space-y-4 hidden">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nova senha</Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input 
                      id="newPassword"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    Mínimo de 6 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input 
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="space-y-4 pt-2">
                <Button className="w-full h-11 text-base">
                  Enviar link de recuperação
                </Button>

                <Link href="/login">
                  <Button 
                    variant="outline" 
                    className="w-full h-11 text-base"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para login
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Informação de tempo */}
        <p className="text-center text-sm text-gray-500 mt-8">
          O link de recuperação é válido por 24 horas.
          <br />
          Se não receber o e-mail, verifique sua caixa de spam.
        </p>
      </div>
    </div>
  )
}