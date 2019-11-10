import {
  ValidationPipeOptions,
  HttpException,
  HttpStatus,
  ValidationError
} from "@nestjs/common";
import { ErrorMsgs } from "../constants";

type MessageMaker = (errors: ValidationError[]) => string;

function isMessageMaker(arg: any): arg is MessageMaker {
  return typeof (arg as MessageMaker) === "function";
}

export function makePipeOptions(
  message: string,
  statusCode?: HttpStatus
): ValidationPipeOptions;
export function makePipeOptions(
  messageMaker: MessageMaker,
  statusCode?: HttpStatus
): ValidationPipeOptions;
export function makePipeOptions(
  messageOrMaker: string | MessageMaker = ErrorMsgs.BAD_REQUEST,
  statusCode: HttpStatus = HttpStatus.BAD_REQUEST
): ValidationPipeOptions {
  return {
    transform: true,
    exceptionFactory: (errors: ValidationError[]): HttpException => {
      let message = "";
      if (isMessageMaker(messageOrMaker)) {
        message = messageOrMaker(errors);
      } else {
        message = messageOrMaker;
      }

      return new HttpException(message, statusCode);
    }
  };
}

export const validationPipeOptions = {
  addUser: makePipeOptions(ErrorMsgs.ADD_USER)
};
