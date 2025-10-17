import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const quoteSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20),
  propertyType: z.enum(["residential", "commercial", "industrial"]),
  systemSize: z.string().min(1, "Please select a system size"),
  monthlyBill: z.string().min(1, "Please enter your monthly bill"),
  address: z.string().trim().min(5, "Address must be at least 5 characters").max(200),
  message: z.string().trim().max(1000).optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const Quote = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const propertyType = watch("propertyType");

  const onSubmit = (data: QuoteFormData) => {
    console.log("Quote request:", data);
    toast.success("Quote request submitted! We'll contact you within 24 hours.");
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-20 min-h-[80vh] flex items-center justify-center">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center shadow-2xl border-none">
              <CardContent className="p-12">
                <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Your quote request has been received. Our solar experts will contact you within 24 hours to discuss your project.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="/">Return to Home</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="py-20 text-white relative overflow-x-hidden"
        style={{
          backgroundImage: `url(/assets/pexels-pnw-prod-8276364.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10 max-w-full overflow-x-hidden">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get Your Free Quote</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90 px-2 mb-6">
            Fill out the form below and our experts will create a customized signage solution for your needs.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <Phone className="h-5 w-5" />
            <a href="tel:+27725679274" className="text-lg font-semibold hover:text-red-400 transition-colors">
              +27 72 567 9274
            </a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-none">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl">Request a Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          {...register("name")}
                          placeholder="John Doe"
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="john@example.com"
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          placeholder="+27 123 456 789"
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive">{errors.phone.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="monthlyBill">Average Monthly Electricity Bill *</Label>
                        <Input
                          id="monthlyBill"
                          {...register("monthlyBill")}
                          placeholder="e.g., R2000"
                          className={errors.monthlyBill ? "border-destructive" : ""}
                        />
                        {errors.monthlyBill && (
                          <p className="text-sm text-destructive">{errors.monthlyBill.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Property Type */}
                    <div className="space-y-2">
                      <Label>Property Type *</Label>
                      <RadioGroup
                        onValueChange={(value) =>
                          setValue("propertyType", value as "residential" | "commercial" | "industrial")
                        }
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="residential" id="residential" />
                          <Label htmlFor="residential" className="cursor-pointer">
                            Residential
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="commercial" id="commercial" />
                          <Label htmlFor="commercial" className="cursor-pointer">
                            Commercial
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="industrial" id="industrial" />
                          <Label htmlFor="industrial" className="cursor-pointer">
                            Industrial
                          </Label>
                        </div>
                      </RadioGroup>
                      {errors.propertyType && (
                        <p className="text-sm text-destructive">{errors.propertyType.message}</p>
                      )}
                    </div>

                    {/* System Size */}
                    <div className="space-y-2">
                      <Label htmlFor="systemSize">Preferred System Size *</Label>
                      <Select onValueChange={(value) => setValue("systemSize", value)}>
                        <SelectTrigger className={errors.systemSize ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select system size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3kw">3kW - Small Home</SelectItem>
                          <SelectItem value="5kw">5kW - Medium Home</SelectItem>
                          <SelectItem value="8kw">8kW - Large Home</SelectItem>
                          <SelectItem value="10kw">10kW+ - Commercial</SelectItem>
                          <SelectItem value="custom">Custom Solution</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.systemSize && (
                        <p className="text-sm text-destructive">{errors.systemSize.message}</p>
                      )}
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                      <Label htmlFor="address">Installation Address *</Label>
                      <Input
                        id="address"
                        {...register("address")}
                        placeholder="123 Main Street, City, Province"
                        className={errors.address ? "border-destructive" : ""}
                      />
                      {errors.address && (
                        <p className="text-sm text-destructive">{errors.address.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information (Optional)</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell us more about your project..."
                        rows={4}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <Card className="shadow-lg border-none">
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Free Consultation</h4>
                      <p className="text-sm text-muted-foreground">
                        Our expert will contact you within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Site Assessment</h4>
                      <p className="text-sm text-muted-foreground">
                        We'll evaluate your property and energy needs
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Custom Proposal</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive a detailed quote and system design
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Installation</h4>
                      <p className="text-sm text-muted-foreground">
                        Professional setup by certified technicians
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-none bg-gradient-to-br from-primary to-accent text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                  <p className="mb-4 opacity-90">
                    Our team is ready to answer your questions
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>📞 +27 72 567 9274</p>
                    <p>📧 info@greatsigns.co.za</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;
