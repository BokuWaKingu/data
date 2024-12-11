import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import logo from "/logo1.png"
import { CardFooter } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <img src={logo} alt="Logo" width="300" height="100" />
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="Addresse email" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <Input id="password" type="password" placeholder="Mot de passe" required />
            </div>
            <Button type="submit" className="w-full bg-orange-500 text-white" onClick={() => navigate("/")}>Connexion</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
        <Button 
            variant="outline" 
            className="w-full"
          >
            <img 
              src="/microsoft.png"
              alt="Microsoft Logo" 
              className="h-7 w-7 object-contain"
            />
            {'Connect with Microsoft'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

