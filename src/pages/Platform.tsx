import Layout from "@/components/layout/Layout";
import { ArrowRight, Brain, Database, Cpu, Zap, Shield, Settings, Cloud, CheckCircle, Sparkles, Users, Rocket, Target } from "lucide-react";

const Platform = () => {
  return (
    <Layout>
      {/* Hero - Core IP Power */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating" style={{ animationDelay: "1s" }} />
        
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 shimmer">
              Sức Mạnh Cốt Lõi
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">2 IP Độc Quyền</span>
              <br />
              <span className="text-foreground">Tạo Nên Sự Khác Biệt</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Kết hợp <span className="text-primary font-semibold">Career Ontology</span> + <span className="text-accent font-semibold">Engeni AI</span> = 
              <br className="hidden md:block" />
              <span className="gradient-text font-bold"> App chuyên nghiệp trong nháy mắt</span>
            </p>
            <p className="text-lg text-muted-foreground">
              Vượt trội hoàn toàn so với các công cụ vibe coding thông thường
            </p>
          </div>

          {/* 2 Core IPs */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Career Ontology */}
            <div className="glow-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Career Ontology</h3>
                <p className="text-lg text-primary font-semibold mb-3">Bản Thể Học Nghề Nghiệp</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Hiểu sâu về workflow, quy trình của từng ngành nghề</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Nắm bắt pain points thực tế của người trong nghề</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Database nghề nghiệp với hàng nghìn use cases thực tế</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Nghiên cứu xã hội học về hành vi và nhu cầu nghề nghiệp</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Engeni AI */}
            <div className="glow-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up relative overflow-hidden" style={{ animationDelay: "0.15s" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Brain className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Engeni AI Engine</h3>
                <p className="text-lg text-accent font-semibold mb-3">AI Sinh Code Thông Minh</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Sinh code production-ready, không phải prototype</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Tự động tạo architecture 4-Organ hoàn chỉnh</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Tích hợp best practices từ hàng nghìn dự án thực tế</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Tối ưu performance và bảo mật từ đầu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Magic Combination */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full border border-primary/30 animate-pulse-slow">
              <Users className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">+</span>
              <Brain className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold gradient-text">=</span>
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-8 mb-4">
              <span className="gradient-text">App Của Người Trong Nghề</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Không chỉ code đẹp, mà còn <span className="text-primary font-semibold">đúng nghiệp vụ</span>, 
              <span className="text-accent font-semibold"> giải quyết đúng vấn đề</span>, 
              và <span className="text-foreground font-semibold">sẵn sàng production</span>
            </p>
          </div>

          {/* Why Better Than Vibe Coding */}
          <div className="glow-card rounded-2xl p-8 md:p-12 max-w-5xl mx-auto mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="relative z-10">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  So Sánh Thực Tế
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Tại Sao Vượt Trội Hơn <span className="gradient-text">Vibe Coding?</span>
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-muted-foreground flex items-center gap-2">
                    <span className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm">❌</span>
                    Vibe Coding Thông Thường
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-destructive">•</span>
                      <span>Chỉ sinh code generic, không hiểu ngành nghề</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive">•</span>
                      <span>Phải mô tả lại từng chi tiết nghiệp vụ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive">•</span>
                      <span>Code prototype, cần refactor nhiều</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive">•</span>
                      <span>Thiếu best practices của ngành</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm">✓</span>
                    RootKnow (Ontology + Engeni)
                  </h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Hiểu sẵn</strong> workflow và pain points của nghề</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Tự động</strong> áp dụng logic nghiệp vụ chuẩn</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Production-ready</strong> ngay từ đầu</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Tích hợp</strong> best practices từ nghìn dự án thực</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Organ Architecture */}
      <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Kiến Trúc
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">4-Organ</span>
              <span className="text-foreground"> Architecture</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tốc độ mà thiếu kiến trúc chỉ là thất bại nhanh. RootKnow sinh ra cả hai.
            </p>
          </div>

          {/* 4-Organ System */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Cpu, title: "UI (Skin)", desc: "Giao diện đẹp, responsive với React hiện đại", delay: "0s" },
              { icon: Database, title: "Data (Bones)", desc: "30+ bảng chuẩn hóa với GraphQL real-time", delay: "0.1s" },
              { icon: Brain, title: "Brain (Logic)", desc: "Business rules engine có thể cấu hình", delay: "0.2s" },
              { icon: Zap, title: "Nerves (Async)", desc: "Workflows, sagas & background jobs", delay: "0.3s" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="glow-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Three Steps */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Cách Hoạt Động</h2>
            <p className="text-muted-foreground">Từ ý tưởng đến production chỉ trong 3 bước đơn giản.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
            {/* Arrows (desktop only) */}
            <div className="hidden md:flex absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2">
              <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <div className="hidden md:flex absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2">
              <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
            </div>

            {[
              { num: 1, title: "Mô Tả Ý Tưởng", desc: "Nói về app bạn muốn. Hệ thống tự hiểu ngành nghề của bạn." },
              { num: 2, title: "RootKnow Sinh 95%", desc: "Full kiến trúc: auth, payments, admin, workflows—sẵn sàng trong giờ." },
              { num: 3, title: "Customize 5%", desc: "Thêm điểm khác biệt của riêng bạn. Deploy ngay với users thật." },
            ].map((step, index) => (
              <div 
                key={index} 
                className="glow-card rounded-xl p-8 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Tính Năng
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bạn Nhận Được <span className="gradient-text">(95% Hoàn Chỉnh)</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Mọi thứ cần để launch. Không cần homework.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Authentication", desc: "Email, social login, password reset—tất cả hoạt động" },
              { icon: Database, title: "Database Schema", desc: "30+ bảng chuẩn hóa, migrations đầy đủ" },
              { icon: Settings, title: "Admin Dashboard", desc: "Quản lý users, analytics, reports" },
              { icon: Zap, title: "Payment Processing", desc: "Tích hợp thanh toán, subscriptions, webhooks" },
              { icon: Cloud, title: "Background Jobs", desc: "Emails, notifications, async processing" },
              { icon: Rocket, title: "Deployment Ready", desc: "Docker, CI/CD, environment configs" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 glow-card p-6 rounded-lg group hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production-First DNA */}
      <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container max-w-4xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Production Ready
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="gradient-text">Production-First</span> DNA
            </h2>
            <p className="text-lg text-muted-foreground">
              RootKnow sinh ra hệ thống production, không phải demos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Error boundaries & graceful fallbacks",
              "Retry logic với exponential backoff",
              "Circuit breakers cho external services",
              "Health checks & readiness probes",
              "Observability & monitoring ready",
              "ACID transactions & data integrity",
              "Input validation schemas",
              "SQL injection & XSS protection",
              "CSRF tokens & rate limiting",
              "Audit logs cho compliance",
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 glow-card rounded-lg group hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;
