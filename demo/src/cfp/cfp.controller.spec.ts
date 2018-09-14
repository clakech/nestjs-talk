import { Test, TestingModule } from '@nestjs/testing';
import { CFPController } from './cfp.controller';
import { CFPService } from './cfp.service';

const cfpServiceMock = jest.fn<CFPService>(() => ({
  create: jest.fn().mockReturnValue({ id: 'abc' }),
  findAll: jest.fn().mockReturnValue([]),
  findOne: jest.fn().mockReturnValue({}),
  update: jest.fn().mockReturnValue({ id: 'abc' }),
  delete: jest.fn().mockReturnValue(undefined),
}))();

const cfpController = new CFPController(cfpServiceMock);

describe('CFPController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CFPController],
      providers: [CFPService],
    }).compile();
  });

  describe('create', () => {
    it('should call create in CFPService and have an ID', () => {
      const cfp = {};

      const res = cfpController.create(cfp);

      expect(cfpServiceMock.create).toHaveBeenCalledWith(cfp);
      expect(res.id).toEqual('abc');
    });
  });

  describe('findAll', () => {
    it('should call findAll in CFPService', () => {
      cfpController.findAll();

      expect(cfpServiceMock.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should call findOne in CFPService', () => {
      cfpController.findOne('abc');

      expect(cfpServiceMock.findOne).toHaveBeenCalledWith('abc');
    });
  });

  describe('update', () => {
    it('should call update in CFPService', () => {
      const cfp = { id: 'abc' };
      cfpController.update('abc', cfp);

      expect(cfpServiceMock.update).toHaveBeenCalledWith('abc', cfp);
    });
  });

  describe('delete', () => {
    it('should call delete in CFPService', () => {
      const cfp = { id: 'abc' };
      cfpController.delete('abc');

      expect(cfpServiceMock.delete).toHaveBeenCalledWith('abc');
    });
  });
});
