import { buildURL } from "../../../common/functions";
import { requestTransformed } from "../../functions";
import { Collection } from "./Collection";
import { MembersOptions } from "./models";

/**
 * @remarks
 * The account tied to the provided session id must be part of the private league.
 *
 * @endpoint https://api.pathofexile.com/private-league-member/id
 * @param id ID of the private league without `PL` prefix
 * @param sessionId
 * @param options
 * @throws [[APIException]]
 */
export const getMembers = async (
    id: string,
    sessionId: string,
    options?: MembersOptions
): Promise<Collection> => {
    const url = buildURL(`https://api.pathofexile.com/private-league-member/${id}`, options);
    return await requestTransformed(Collection, url, sessionId);
};