
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [authMethod, setAuthMethod] = useState<"email" | "phone">("email");
  const [showOTP, setShowOTP] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (authMethod === "phone" && !showOTP) {
      setShowOTP(true);
      setIsLoading(false);
      return;
    }
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md p-6">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
              
              <div className="space-y-2">
                <Label>Login Method</Label>
                <div className="flex gap-4">
                  <Button 
                    type="button"
                    variant={authMethod === "email" ? "default" : "outline"}
                    onClick={() => {
                      setAuthMethod("email");
                      setShowOTP(false);
                    }}
                  >
                    Email
                  </Button>
                  <Button
                    type="button"
                    variant={authMethod === "phone" ? "default" : "outline"}
                    onClick={() => setAuthMethod("phone")}
                  >
                    Phone
                  </Button>
                </div>
              </div>

              {authMethod === "email" ? (
                <>
                  <Input
                    type="email"
                    placeholder="College Email"
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    required
                  />
                </>
              ) : showOTP ? (
                <div className="space-y-2">
                  <Label>Enter OTP</Label>
                  <InputOTP maxLength={6} className="gap-2">
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              ) : (
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              )}
              
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Please wait..." : 
                  (authMethod === "phone" && !showOTP ? "Send OTP" : "Login")}
              </Button>
              
              <div className="text-center">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot Password?
                </a>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-bold text-center">Create Account</h2>
              <Input
                type="text"
                placeholder="Full Name"
                required
              />
              <Input
                type="email"
                placeholder="College Email"
                required
              />
              <Input
                type="password"
                placeholder="Password"
                required
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                required
              />
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Register"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Auth;
