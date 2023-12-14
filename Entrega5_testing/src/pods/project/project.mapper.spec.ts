import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('project mapper spects', () => {
  it('should map project with empty employees', () => {
    const myProject: apiModel.Project = {
      id: '1',
      name: 'pilots',
      externalId: '24',
      comments: 'string',
      isActive: true,
      employees: [],
    };
    const result: viewModel.Project = mapProjectFromApiToVm(myProject);

    expect(result).toEqual(myProject);
    expect(result.employees).toEqual([]);
  });

  it('should return empty project if undefined', () => {
    expect(mapProjectFromApiToVm(undefined)).toEqual(
      viewModel.createEmptyProject()
    );
  });

  it('should return empty project if null', () => {
    expect(mapProjectFromApiToVm(null)).toEqual(viewModel.createEmptyProject());
  });

  it('should return mapped employees', () => {
    const myEmployees: apiModel.EmployeeSummary[] = [
      {
        id: '1',
        isAssigned: true,
        employeeName: 'Adrian',
      },
      {
        id: '2',
        isAssigned: true,
        employeeName: 'Cristina',
      },
    ];
    const myProject: apiModel.Project = {
      id: '1',
      name: 'pilots',
      externalId: '24',
      comments: 'string',
      isActive: true,
      employees: myEmployees,
    };

    const result: viewModel.Project = mapProjectFromApiToVm(myProject);
    expect(result.employees).toEqual(myEmployees);
  });
});
