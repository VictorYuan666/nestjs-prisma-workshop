import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class PrismaClientExceptionFilter<T> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost): void;
}
