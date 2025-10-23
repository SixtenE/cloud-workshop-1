# Workshop – Deploya saker till internet på enklast möjliga sätt

Målet med dagens workshop är att testa olika hostingtjänster och utforska vad vi kan göra med respektive.
Vi ska:

- Deploya en Next.js-app till Vercel (och andra molntjänster om det hinns med)
- Vi har redan sett att Vercel ger oss en preview miljö. Hur kan vi jobba med detta på andra plattformar?
- Undersöka hur du kan utöka to-do appen med backend, miljövariabler och databas

## Steg 1 – Kom igång

1. Klona detta repo eller skapa ett nytt eget projekt (om ni hellre vill komma igång med något eget):

   ```bash
   npx create-next-app@latest my-app --ts --tailwind --eslint --app --src-dir
   ```

2. Skapa ett konto på [Vercel](https://vercel.com).

3. Koppla ditt GitHub-repo till Vercel via “Add new project”.

4. Se att din första deploy fungerar (du ska få en publik URL).

5. Gör en liten kodändring, `git commit` och `git push` och se hur sidan uppdateras automatiskt.

## Steg 2 – Preview deployments

1. Skapa en ny branch och byt till den:

   ```bash
   git switch -c feature/test-preview
   ```

2. Gör en liten förändring i appen och pusha upp.

3. Öppna din Pull Request på GitHub — du ska nu se en Preview-URL från Vercel-bot.

**Frågor att reflektera kring:**

- Vad är skillnaden mellan en preview deployment och en production deployment?
- Hur kan det här hjälpa till när vi jobbar i ett team?

## Steg 3 - Vidareutveckling

1. Än så länge är to-do appen oerhört simpel.
2. Lägg till fler features (för att se hur först preview uppdateras och sen prod)

- Lägg till en checkbox och toggle på To-dosen så att man kan completa dem

3. Om vi skulle vilja ha en databas för att se till att datan inte försvinner efter några minuter.

- Vad behöver vi då?
- Skulle vi kunna dela upp frontend och backend på olika tjänster? Ex. Vercel + Railway/Render?

## Steg 3 – Vidareutveckla eller testa att deploya ett tidigare projekt

Fortsätt göra ändringar i testrepot om du vill. Alternativt ta ett av dina egna projekt (t.ex. från AI-kursen) och försök deploya det.

Fundera på vad som krävs för att allt ska fungera i molnet:

- Har du en backend?
  - [Vercel stödjer Express](https://vercel.com/docs/frameworks/backend/express)
  - Men kanske vill vi deploya backend någon annanstans?
- Har du **API-nycklar eller miljövariabler**?
  - [Läs mer här](https://vercel.com/docs/environment-variables)
- Har du databas (t.ex. Supabase, Firebase, PlanetScale)?
  - Hur hanterar du anslutningen och env-nycklarna?

**Angående miljövariabler (environemnt variables .env filen):**
Sätt upp en miljövariabel i Vercel (t.ex. `NEXT_PUBLIC_ENVIRONMENT = "production"`) och använd den i din kod för att visa olika text i dev/prod.

Fundera på: När skulle detta kunna vara användbart i produktion och utveckling?

## Steg 4 – Jämför och testa andra (PaaS)-molntjänster

Undersök och jämför följande:

- [Vercel](https://vercel.com)
- [Render](https://render.com)
- [Railway](https://railway.com/)
- [Fly.io](https://fly.io)
- [Netlify](https://www.netlify.com)

- Vilken typ av projekt verkar varje plattform bäst lämpad för?
- Vilka stödjer container-baserad drift (Docker som vi ska prata om nästa vecka)?
- Hur hanterar de databaser och API-nycklar?
- Skulle du använda samma plattform för frontend och backend? Varför / varför inte?

## Svårare uppgifter

- Testa fler hostingtjänster
  - Byt från Vercel till Render/Netlify/fly.io
  - Kan du deploya din applikation på samma enkla sätt? Vad behöver du ändra?
- Lägg till en **egen domän** → [Läs mer här](https://vercel.com/docs/domains/working-with-domains/add-a-domain)
- Kolla **loggarna** i Vercel (när du anropar API-routen)
- Utforska hur man gör **rollback** till en tidigare deployment

## Övriga tips att göra under dagen:

- Utforska Vercel-dashboarden — titta under **Deployments, Environment Variables, Logs, Domains.**
- Utforska andra hostingplattformars dashboards med samma ögon!
