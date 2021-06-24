export const getEstimatedVoteValue = ({ userData, vp, weight, type = 'upvote', tribeConfig, tribeInfo }) => {
  const multiplier = (type === 'upvote') ? userData.vote_weight_multiplier : userData.downvote_weight_multiplier

  const rshares = (userData.staked_tokens * Math.min(multiplier * weight, 10000) * vp) / (10000 * 100)

  const value = ((Math.max(0, rshares) ** tribeConfig.author_curve_exponent) * tribeInfo.reward_pool) / tribeInfo.pending_rshares

  return (value / (10 ** tribeInfo.precision)).toFixed(tribeInfo.precision)
}