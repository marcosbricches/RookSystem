import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, KeyRound, Building2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Logo e título */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Building2 className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Bem-vindo ao Rook System
          </h1>
          <p className="mt-2 text-gray-600">
            Faça login para acessar sua conta
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Entre com suas credenciais para continuar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              {/* Mensagem de erro (exemplo) */}
              <Alert variant="destructive" className="hidden">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  E-mail ou senha incorretos. Tente novamente.
                </AlertDescription>
              </Alert>

              {/* Campo de e-mail */}
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
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

              {/* Campo de senha */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <Link 
                    href="/recuperar-senha"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input 
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Botão de login */}
              <Button className="w-full h-11 text-base mt-6">
                Entrar
              </Button>

              {/* Link para cadastro */}
              <p className="text-center text-sm text-gray-600">
                Não tem uma conta?{" "}
                <Link 
                  href="/cadastro" 
                  className="font-medium text-primary hover:underline"
                >
                  Criar conta
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Informação de segurança */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Protegido por reCAPTCHA e sujeito à{" "}
          <Link href="/politica-privacidade" className="text-primary hover:underline">
            Política de Privacidade
          </Link>{" "}
          e{" "}
          <Link href="/termos-uso" className="text-primary hover:underline">
            Termos de Uso
          </Link>
        </p>
      </div>
    </div>
  )
}