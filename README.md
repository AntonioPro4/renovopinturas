# Renovo Pinturas - Website

Projeto web para a empresa de pintura Renovo Pinturas, desenvolvido com foco em SEO e conversão.

## Dados da Empresa

- **Nome**: Renovo Pinturas
- **CNPJ**: 59.247.765/0001-73
- **WhatsApp**: (11) 91404-4916
- **Email**: contato@renovopinturas.com.br
- **Autor do Blog**: Antonio Santos
- **LinkedIn**: https://www.linkedin.com/in/antonio-souza-seo/
- **Consultoria SEO**: Meedfy

## Estrutura do Projeto

```
renovopinturas/
├── public/
│   ├── sitemap.xml          # Mapa do site para SEO
│   ├── robots.txt           # Diretivas para bots de busca
│   └── og.jpg              # Imagem para Open Graph
├── src/
│   ├── pages/
│   │   ├── index.html      # Home page
│   │   └── blog/
│   │       ├── index.html  # Lista de artigos
│   │       ├── como-escolher-tinta-certa.html
│   │       └── impermeabilizacao-previne-infiltracoes.html
│   └── templates/
│       ├── servico-pintura-residencial.html
│       ├── servico-pintura-comercial.html
│       ├── servico-pedreiro.html
│       ├── pagina-regiao.html
│       └── blog-artigo.html  # Template para novos artigos
```

## SEO Implementado

### Meta Tags
- [x] Title tags otimizadas
- [x] Meta descriptions únicas por página
- [x] Canonical URLs
- [x] Open Graph (Facebook, WhatsApp)
- [x] Twitter Cards

### Schema.org
- [x] Organization
- [x] LocalBusiness
- [x] FAQPage
- [x] Article (para blog)
- [x] BreadcrumbList
- [x] Person (autor)

### Arquivos Técnicos
- [x] sitemap.xml completo
- [x] robots.txt
- [x] Estrutura semântica HTML5
- [x] Imagens com alt text
- [x] URLs amigáveis

## Conteúdo do Blog

Artigos publicados com foco em SEO:

1. **Como escolher a tinta certa para cada ambiente**
   - Categoria: Pintura
   - Foco: busca por "tipos de tinta", "tinta para quarto", etc.

2. **Como impermeabilização previne infiltrações e mofo**
   - Categoria: Impermeabilização
   - Foco: busca por "impermeabilização", "infiltração", "mofo"

## Autor Box

Cada artigo inclui:
- Foto do autor
- Nome: Antonio Santos
- Título: Especialista em SEO e Marketing Digital
- Bio mencionando a Meedfy
- Links para LinkedIn, email e WhatsApp
- Schema.org Person integrado

## Como Adicionar Novo Artigo

1. Copie o template `src/templates/blog-artigo.html`
2. Salve em `src/pages/blog/[slug-do-artigo].html`
3. Preencha:
   - Title (entre 50-60 caracteres)
   - Meta description (entre 150-155 caracteres)
   - Canonical URL
   - Conteúdo do artigo
   - Imagem destacada
   - Schema.org Article
4. Adicione ao sitemap.xml

## Deploy

Para publicar, basta fazer upload dos arquivos HTML para qualquer hospedagem estática (Netlify, Vercel, GitHub Pages, etc).

## Próximos Passos

- [ ] Criar mais artigos de blog
- [ ] Adicionar páginas de serviços individuais
- [ ] Criar páginas para cada região
- [ ] Configurar Google Search Console
- [ ] Configurar Google Analytics
- [ ] Criar perfil na Google Meu Negócio

---

Desenvolvido por **Meedfy** - Consultoria de SEO
