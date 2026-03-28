import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { List, X, WhatsappLogo, InstagramLogo, Star, ForkKnife, Wine, Fish, Timer, MapPin, Clock, Phone, GoogleLogo, Waves, CookingPot, MusicNotes } from '@phosphor-icons/react'

const pratos = [
  { icon: Fish, title: 'Moqueca Catarinense', desc: 'Nossa especialidade há 39 anos. Peixe fresco do dia com leite de coco, azeite de dendê e pirão.' },
  { icon: CookingPot, title: 'Caldeirada de Frutos do Mar', desc: 'Camarão, lula, mexilhão e peixe em caldo aromático com ervas frescas.' },
  { icon: ForkKnife, title: 'Congro Grelhado ao Molho de Laranja', desc: 'Filé de congro grelhado na brasa com molho cítrico e guarnições da casa.' },
  { icon: Waves, title: 'Risoto de Camarão com Ostras', desc: 'Arroz arbório cremoso com camarões e ostras frescas de Florianópolis.' },
]

const reviews = [
  { name: 'Ricardo A.', text: 'Moqueca sensacional! 39 anos de tradição fazem toda a diferença. Atendimento impecável e vista linda.', stars: 5 },
  { name: 'Marina L.', text: 'Melhor restaurante de frutos do mar de Floripa. A caldeirada é divina. Voltaremos com certeza!', stars: 5 },
  { name: 'Carlos H.', text: 'Ambiente aconchegante com vista para o mar. Comida excepcional, porções generosas. Recomendo demais.', stars: 5 },
]

function S({ children, id, bg = '#FBF8F4', style = {} }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  return <motion.section ref={ref} id={id} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ padding: 'clamp(80px, 10vw, 120px) 40px', background: bg, ...style }}>{children}</motion.section>
}

export default function HomePage() {
  const [sc, setSc] = useState(false)
  const [mo, setMo] = useState(false)
  useEffect(() => { const h = () => setSc(window.scrollY > 50); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])

  return (<>
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: sc ? '10px 0' : '18px 0', background: sc ? 'rgba(251,248,244,0.95)' : 'rgba(251,248,244,0.5)', backdropFilter: 'blur(20px)', transition: 'all 0.4s' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ fontFamily: "'Lora', serif", fontSize: 22, color: '#2C2C2C' }}>By <span style={{ color: '#C75B39', fontStyle: 'italic' }}>Cuca</span></a>
        <div className="nd" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {['Cardápio', 'Tradição', 'Avaliações', 'Reservar'].map(l => <a key={l} href={`#${l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} style={{ fontSize: 12, letterSpacing: 1.5, color: '#888', textTransform: 'uppercase' }}>{l}</a>)}
          <a href="tel:+554832490402" style={{ padding: '10px 24px', background: '#C75B39', color: '#fff', fontSize: 12, letterSpacing: 1, borderRadius: 30 }}>Reservar Mesa</a>
        </div>
        <button className="mb" onClick={() => setMo(!mo)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>{mo ? <X size={24} /> : <List size={24} />}</button>
      </div>
      {mo && <div style={{ position: 'fixed', inset: 0, background: 'rgba(251,248,244,0.98)', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28 }}>
        <button onClick={() => setMo(false)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer' }}><X size={28} /></button>
        {['Cardápio', 'Tradição', 'Reservar'].map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMo(false)} style={{ fontFamily: "'Lora', serif", fontSize: 24, color: '#2C2C2C' }}>{l}</a>)}
      </div>}
      <style>{`@media(max-width:768px){.nd{display:none!important}.mb{display:block!important}}`}</style>
    </nav>

    {/* HERO — restaurante acolhedor, tradição */}
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(170deg, #3D2216 0%, #5C3425 30%, #7A4430 60%, #3D2216 100%)', padding: '140px 40px 80px', textAlign: 'center', position: 'relative' }}>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} style={{ width: 80, height: 80, borderRadius: '50%', border: '2px solid rgba(199,91,57,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
        <Fish size={36} weight="duotone" color="#C75B39" />
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: 12, letterSpacing: 5, textTransform: 'uppercase', color: '#C75B39', marginBottom: 20 }}>Desde 1985 · Coqueiros · Florianópolis</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 400, color: '#FBF8F4', lineHeight: 1.1, maxWidth: 700 }}>
        39 anos de <span style={{ color: '#C75B39', fontStyle: 'italic' }}>sabor</span><br />e tradição
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ fontSize: 16, color: 'rgba(251,248,244,0.5)', maxWidth: 450, lineHeight: 1.8, marginTop: 24 }}>
        Moquecas, frutos do mar e a melhor vista de Coqueiros. Onde a tradição catarinense encontra o sabor do mar.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="tel:+554832490402" style={{ padding: '16px 36px', background: '#C75B39', color: '#fff', fontSize: 13, borderRadius: 30, display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 500 }}><Phone size={18} weight="fill" /> Reservar Mesa</a>
        <a href="#cardapio" style={{ padding: '16px 36px', border: '1px solid rgba(251,248,244,0.2)', color: '#FBF8F4', fontSize: 13, borderRadius: 30 }}>Ver Cardápio</a>
      </motion.div>
    </section>

    {/* TRADIÇÃO */}
    <div style={{ background: '#FBF8F4', padding: '40px', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', textAlign: 'center' }}>
        {[{ n: '39', d: 'Anos de Tradição' }, { n: '4.5', d: 'Estrelas Google' }, { n: '100+', d: 'Avaliações' }, { n: '1985', d: 'Fundação' }].map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <p style={{ fontFamily: "'Lora', serif", fontSize: 32, color: '#C75B39' }}>{c.n}</p>
            <p style={{ fontSize: 11, color: '#888', letterSpacing: 1, marginTop: 4 }}>{c.d}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <S id="cardapio" bg="#fff">
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#C75B39', marginBottom: 12, textAlign: 'center' }}>Especialidades da Casa</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#2C2C2C', marginBottom: 60, textAlign: 'center' }}>Nosso <span style={{ fontStyle: 'italic', color: '#C75B39' }}>Cardápio</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {pratos.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ padding: 32, background: '#FBF8F4', borderRadius: 12, border: '1px solid rgba(0,0,0,0.04)' }}>
              <p.icon size={32} weight="duotone" color="#C75B39" style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 20, color: '#2C2C2C', marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.7 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </S>

    <S id="tradicao" bg="#3D2216">
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FBF8F4', marginBottom: 32 }}>Uma história de <span style={{ fontStyle: 'italic', color: '#C75B39' }}>amor</span> pelo mar</h2>
        <p style={{ color: 'rgba(251,248,244,0.5)', lineHeight: 1.9, maxWidth: 600, margin: '0 auto' }}>
          Em 1985, nascia o Fedoca By Cuca — um sonho de compartilhar o melhor dos frutos do mar catarinenses. Ao longo de quase quatro décadas, o By Cuca se tornou referência em Florianópolis. Com vista privilegiada para o mar de Coqueiros, cada refeição é uma experiência que celebra a tradição, o frescor e o calor da hospitalidade ilhéu.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 40, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Wine size={20} weight="duotone" color="#C75B39" /><span style={{ color: 'rgba(251,248,244,0.6)', fontSize: 14 }}>Carta de Vinhos</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Waves size={20} weight="duotone" color="#C75B39" /><span style={{ color: 'rgba(251,248,244,0.6)', fontSize: 14 }}>Vista para o Mar</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><MusicNotes size={20} weight="duotone" color="#C75B39" /><span style={{ color: 'rgba(251,248,244,0.6)', fontSize: 14 }}>Música ao Vivo</span></div>
        </div>
      </div>
    </S>

    <S id="avaliacoes" bg="#FBF8F4">
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(199,91,57,0.1)', padding: '8px 20px', borderRadius: 30, marginBottom: 16 }}>
            <GoogleLogo size={16} weight="bold" color="#C75B39" /><span style={{ fontSize: 13, fontWeight: 500 }}>4.5 · 100 avaliações</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#2C2C2C' }}>Quem <span style={{ fontStyle: 'italic', color: '#C75B39' }}>prova</span>, volta</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ padding: 28, background: '#fff', borderRadius: 12 }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>{[...Array(r.stars)].map((_, j) => <Star key={j} size={14} weight="fill" color="#C75B39" />)}</div>
              <p style={{ fontFamily: "'Lora', serif", fontSize: 16, color: '#2C2C2C', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 14 }}>"{r.text}"</p>
              <p style={{ fontSize: 12, color: '#888' }}>{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </S>

    <S id="reservar" bg="#3D2216">
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FBF8F4', marginBottom: 16 }}>Reserve sua <span style={{ fontStyle: 'italic', color: '#C75B39' }}>mesa</span></h2>
        <p style={{ color: 'rgba(251,248,244,0.4)', marginBottom: 40 }}>Venha celebrar o sabor do mar com a gente.</p>
        <a href="tel:+554832490402" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '18px 48px', background: '#C75B39', color: '#fff', borderRadius: 30, fontSize: 15, fontWeight: 500 }}><Phone size={22} weight="fill" /> (48) 3249-0402</a>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(251,248,244,0.08)' }}>
          <div><MapPin size={20} weight="light" color="#C75B39" style={{ marginBottom: 8 }} /><p style={{ fontSize: 14, color: '#FBF8F4' }}>Rua André Wendhausen, 175</p><p style={{ fontSize: 13, color: 'rgba(251,248,244,0.4)' }}>Coqueiros — Florianópolis/SC</p></div>
          <div><Clock size={20} weight="light" color="#C75B39" style={{ marginBottom: 8 }} /><p style={{ fontSize: 14, color: '#FBF8F4' }}>Almoço e Jantar</p><p style={{ fontSize: 13, color: 'rgba(251,248,244,0.4)' }}>Terça a Domingo</p></div>
          <div><Phone size={20} weight="light" color="#C75B39" style={{ marginBottom: 8 }} /><p style={{ fontSize: 14, color: '#FBF8F4' }}>(48) 3249-0402</p><p style={{ fontSize: 13, color: 'rgba(251,248,244,0.4)' }}>Reservas</p></div>
        </div>
      </div>
    </S>

    <footer style={{ padding: '32px 40px', background: '#2C1810', borderTop: '1px solid rgba(251,248,244,0.04)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <p style={{ fontFamily: "'Lora', serif", fontSize: 16, color: '#FBF8F4' }}>By <span style={{ color: '#C75B39', fontStyle: 'italic' }}>Cuca</span></p>
        <a href="https://instagram.com/bycucacoqueiros" target="_blank" rel="noopener"><InstagramLogo size={18} color="rgba(251,248,244,0.4)" /></a>
        <Link to="/manual-da-marca" style={{ fontSize: 11, color: '#C75B39', letterSpacing: 2, textTransform: 'uppercase' }}>Manual da Marca</Link>
      </div>
      <p style={{ maxWidth: 1200, margin: '16px auto 0', fontSize: 11, color: 'rgba(251,248,244,0.2)', textAlign: 'center' }}>By Cuca Restaurante — Coqueiros — Florianópolis/SC — Desde 1985</p>
    </footer>

    <motion.a href="https://wa.me/5548999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20By%20Cuca." target="_blank" rel="noopener" animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 1000, width: 56, height: 56, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}><WhatsappLogo size={28} weight="fill" color="#fff" /></motion.a>
  </>)
}
