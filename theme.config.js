const YEAR = new Date().getFullYear()

export default {
  projectLink: 'https://github.com/Mohi222/itsmohi-ir',
  titleSuffix: ' – itsMohi',
  nextLinks: true,
  prevLinks: true,
  darkMode: true,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Mohammad A. Ahmadian.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
