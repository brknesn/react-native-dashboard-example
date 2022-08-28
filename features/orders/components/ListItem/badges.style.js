import Style from '../../../../constants/Style'

const badges = {
  status: {
    padding: 3,
    fontSize: 9,
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: Style.badgeDefaultBgColor,
    maxWidth: 55,
  },
  pending: {
    backgroundColor: Style.badgePendingBgColor,
    color: Style.badgePendingColor,
  },
  delivering: {
    backgroundColor: Style.badgeDeliveringBgColor,
    color: Style.badgeDeliveringColor,
  },
  delivered: {
    backgroundColor: Style.badgeDeliveredBgColor,
    color: Style.badgeDeliveredColor,
  },
  cancelled: {
    backgroundColor: Style.badgeCancelledBgColor,
    color: Style.badgeCancelledColor,
  },
  paymentStatus: {
    padding: 3,
    fontSize: Style.textXSmallSize,
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: Style.badgeDefaultBgColor,
    color: Style.badgeDefaultColor,
  },
  paid: {
    backgroundColor: Style.badgePaidBgColor,
    color: Style.badgePaidColor,
  },
  unpaid: {
    backgroundColor: Style.badgeUnpaidBgColor,
    color: Style.badgeUnpaidColor,
  },
}
export default badges
