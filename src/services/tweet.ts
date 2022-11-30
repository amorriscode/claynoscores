import { isRaptor, isRex, Trait } from './claynosaurz'

function getTweetHeader(attributes: Trait[] = []) {
  if (isRaptor(attributes)) {
    return 'wen @RaptorsDAO? 👀'
  }

  if (isRex(attributes)) {
    return 'wen @REXyDAO? 🦖'
  }

  return 'Welcome to Claynotopia! 🌋'
}

export function getSalesTweet(
  claynoName = 'A Claynosaur',
  amount: number,
  attributes: Trait[] = []
) {
  return [`${getTweetHeader(attributes)}\n\n${claynoName} sold for ◎${amount}`]
}
